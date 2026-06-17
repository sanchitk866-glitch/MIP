import { AlignmentResult, MutationDetail } from "./types";

/**
 * Needleman-Wunsch Dynamic Programming Global Alignment Algorithm
 * implemented in pure TypeScript for sequence-independent execution.
 */
export function alignSequences(seqA: string, seqB: string): AlignmentResult {
  const sA = seqA.toUpperCase().replace(/[^A-Z-]/g, "");
  const sB = seqB.toUpperCase().replace(/[^A-Z-]/g, "");
  
  if (!sA || !sB) {
    return {
      score: 0,
      similarity: 0,
      gaps: 0,
      matches: 0,
      alignedSeqA: sA,
      alignedSeqB: sB,
      mutations: [],
      alignmentLength: 0,
    };
  }

  const MATCH = 2;
  const MISMATCH = -1;
  const GAP = -2;

  const n = sA.length;
  const m = sB.length;

  const dp: number[][] = Array(n + 1)
    .fill(null)
    .map(() => Array(m + 1).fill(0));

  // Initialize borders
  for (let i = 0; i <= n; i++) dp[i][0] = i * GAP;
  for (let j = 0; j <= m; j++) dp[0][j] = j * GAP;

  // Fill DP table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const matchScore = sA[i - 1] === sB[j - 1] ? MATCH : MISMATCH;
      dp[i][j] = Math.max(
        dp[i - 1][j - 1] + matchScore, // Match/Mismatch
        dp[i - 1][j] + GAP,          // Deletion in B (gap in B)
        dp[i][j - 1] + GAP           // Insertion in B (gap in A)
      );
    }
  }

  // Backtracking
  let alignedA = "";
  let alignedB = "";
  let i = n;
  let j = m;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0) {
      const matchScore = sA[i - 1] === sB[j - 1] ? MATCH : MISMATCH;
      if (dp[i][j] === dp[i - 1][j - 1] + matchScore) {
        alignedA = sA[i - 1] + alignedA;
        alignedB = sB[j - 1] + alignedB;
        i--;
        j--;
        continue;
      }
    }
    
    if (i > 0 && (j === 0 || dp[i][j] === dp[i - 1][j] + GAP)) {
      alignedA = sA[i - 1] + alignedA;
      alignedB = "-" + alignedB;
      i--;
    } else {
      alignedA = "-" + alignedA;
      alignedB = sB[j - 1] + alignedB;
      j--;
    }
  }

  // Analyze alignment for matches, gaps, and mutations
  let matches = 0;
  let gaps = 0;
  const mutations: MutationDetail[] = [];
  
  let wtIdx = 0; // index in sA (original WT)
  let mutIdx = 0; // index in sB (original Mutant)
  
  const alignLen = alignedA.length;

  for (let k = 0; k < alignLen; k++) {
    const charA = alignedA[k];
    const charB = alignedB[k];

    if (charA === "-" && charB === "-") continue; // should not happen in NW

    if (charA === charB) {
      matches++;
      wtIdx++;
      mutIdx++;
    } else if (charA === "-") {
      // Gap in Wildtype -> Insertion in Mutant
      gaps++;
      mutations.push({
        position: wtIdx + 1, // Insertion occurs right after wtIdx
        wildtype: "-",
        mutant: charB,
        type: "Insertion",
        effect: `Insertion of ${charB} at position ${wtIdx + 1}`
      });
      mutIdx++;
    } else if (charB === "-") {
      // Gap in Mutant -> Deletion in Wildtype
      gaps++;
      mutations.push({
        position: wtIdx + 1,
        wildtype: charA,
        mutant: "-",
        type: "Deletion",
        effect: `Deletion of ${charA} at position ${wtIdx + 1}`
      });
      wtIdx++;
    } else {
      // Substitution mismatch
      mutations.push({
        position: wtIdx + 1,
        wildtype: charA,
        mutant: charB,
        type: "Substitution",
        effect: `Substitution ${charA} → ${charB} at position ${wtIdx + 1}`
      });
      wtIdx++;
      mutIdx++;
    }
  }

  const score = dp[n][m];
  const similarity = alignLen > 0 ? (matches / alignLen) * 100 : 0;

  return {
    score,
    similarity,
    gaps,
    matches,
    alignedSeqA: alignedA,
    alignedSeqB: alignedB,
    mutations,
    alignmentLength: alignLen,
  };
}

/**
 * Basic sequence analysis helper
 */
export function analyzeDNASequence(dnaSeq: string) {
  const cleanSeq = dnaSeq.toUpperCase().replace(/[^A-Z]/g, "");
  const len = cleanSeq.length;
  if (!len) {
    return {
      gcContent: 0,
      length: 0,
      purines: 0,
      pyrimidines: 0,
      atgCount: 0,
      orfs: [],
      translation: "",
      codonUsage: {},
      baseComposition: { A: 0, C: 0, G: 0, T: 0 },
    };
  }

  // Base counts
  let a = 0, c = 0, g = 0, t = 0;
  for (let i = 0; i < len; i++) {
    const b = cleanSeq[i];
    if (b === "A") a++;
    else if (b === "C") c++;
    else if (b === "G") g++;
    else if (b === "T" || b === "U") t++;
  }

  const gcContent = ((g + c) / len) * 100;
  const purines = a + g;
  const pyrimidines = c + t;

  // ATG start counts
  let atgCount = 0;
  for (let i = 0; i < len - 2; i++) {
    if (cleanSeq.substring(i, i + 3) === "ATG") {
      atgCount++;
    }
  }

  // Translation & Codon usage
  const codonMap: Record<string, string> = {
    GCT: "A", GCC: "A", GCA: "A", GCG: "A",
    CGT: "R", CGC: "R", CGA: "R", CGG: "R", AGA: "R", AGG: "R",
    AAT: "N", AAC: "N",
    GAT: "D", GAC: "D",
    TGT: "C", TGC: "C",
    CAA: "Q", CAG: "Q",
    GAA: "E", GAG: "E",
    GGT: "G", GGC: "G", GGA: "G", GGG: "G",
    CAT: "H", CAC: "H",
    ATT: "I", ATC: "I", ATA: "I",
    TTA: "L", TTG: "L", CTT: "L", CTC: "L", CTA: "L", CTG: "L",
    AAA: "K", AAG: "K",
    ATG: "M",
    TTT: "F", TTC: "F",
    CCT: "P", CCC: "P", CCA: "P", CCG: "P",
    TCT: "S", TCC: "S", TCA: "S", TCG: "S", AGT: "S", AGC: "S",
    ACT: "T", ACC: "T", ACA: "T", ACG: "T",
    TGG: "W",
    TAT: "Y", TAC: "Y",
    GTT: "V", GTC: "V", GTA: "V", GTG: "V",
    TAA: "*", TAG: "*", TGA: "*" // Stop
  };

  const codonUsage: Record<string, number> = {};
  let pSeq = "";
  for (let i = 0; i <= len - 3; i += 3) {
    const codon = cleanSeq.substring(i, i + 3);
    if (codon.length === 3) {
      codonUsage[codon] = (codonUsage[codon] || 0) + 1;
      const aa = codonMap[codon] || "?";
      pSeq += aa;
    }
  }

  // ORF Finder (very basic: searches for ATG until any Stop * codon is hit)
  const orfs: Array<{
    frame: number;
    start: number;
    end: number;
    length: number;
    sequence: string;
    protein: string;
  }> = [];

  // Check 3 reading frames
  for (let frame = 0; frame < 3; frame++) {
    let i = frame;
    while (i <= len - 3) {
      const codon = cleanSeq.substring(i, i + 3);
      if (codon === "ATG") {
        let orfDNA = "ATG";
        let orfProtein = "M";
        let j = i + 3;
        let foundStop = false;
        
        while (j <= len - 3) {
          const nextCodon = cleanSeq.substring(j, j + 3);
          orfDNA += nextCodon;
          const aa = codonMap[nextCodon] || "?";
          if (aa === "*") {
            orfProtein += "*";
            foundStop = true;
            break;
          }
          orfProtein += aa;
          j += 3;
        }

        if (foundStop && orfDNA.length >= 30) { // arbitrary min size: 10 AAs
          orfs.push({
            frame: frame + 1,
            start: i + 1,
            end: j + 3,
            length: orfDNA.length,
            sequence: orfDNA,
            protein: orfProtein,
          });
        }
        i = j + 3; // jump past stop codon
      } else {
        i += 3;
      }
    }
  }

  return {
    gcContent,
    length: len,
    purines,
    pyrimidines,
    atgCount,
    orfs: orfs.sort((x, y) => y.length - x.length), // Sort by size descending
    translation: pSeq,
    codonUsage,
    baseComposition: { A: a, C: c, G: g, T: t },
  };
}
