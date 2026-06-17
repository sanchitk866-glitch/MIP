import { GeneInfo } from "./types";

// Amino Acid Biophysical Properties Table
// volumes in Cubic Angstroms, Hydrophobicity on Kyte-Doolittle scale (-4.5 to 4.5)
// charges at pH 7.4, polarity (1 for polar, 0 for nonpolar)
export interface AAProperties {
  volume: number;
  hydrophobicity: number;
  charge: number;
  polarity: number;
}

export const AMINO_ACID_PROPERTIES: Record<string, AAProperties> = {
  A: { volume: 88.6, hydrophobicity: 1.8, charge: 0, polarity: 0 },   // Ala
  R: { volume: 173.4, hydrophobicity: -4.5, charge: 1, polarity: 1 },  // Arg
  N: { volume: 114.1, hydrophobicity: -3.5, charge: 0, polarity: 1 },  // Asn
  D: { volume: 111.1, hydrophobicity: -3.5, charge: -1, polarity: 1 }, // Asp
  C: { volume: 108.5, hydrophobicity: 2.5, charge: 0, polarity: 1 },   // Cys
  Q: { volume: 143.8, hydrophobicity: -3.5, charge: 0, polarity: 1 },  // Gln
  E: { volume: 138.4, hydrophobicity: -3.5, charge: -1, polarity: 1 }, // Glu
  G: { volume: 60.1, hydrophobicity: -0.4, charge: 0, polarity: 0 },   // Gly
  H: { volume: 153.2, hydrophobicity: -3.2, charge: 0.1, polarity: 1 },// His (weakly positive at pH 7.4)
  I: { volume: 166.7, hydrophobicity: 4.5, charge: 0, polarity: 0 },   // Ile
  L: { volume: 166.7, hydrophobicity: 3.8, charge: 0, polarity: 0 },   // Leu
  K: { volume: 168.6, hydrophobicity: -3.9, charge: 1, polarity: 1 },  // Lys
  M: { volume: 162.9, hydrophobicity: 1.9, charge: 0, polarity: 0 },   // Met
  F: { volume: 189.9, hydrophobicity: 2.8, charge: 0, polarity: 0 },   // Phe
  P: { volume: 112.7, hydrophobicity: -1.6, charge: 0, polarity: 0 },  // Pro
  S: { volume: 89.0, hydrophobicity: -0.8, charge: 0, polarity: 1 },   // Ser
  T: { volume: 116.1, hydrophobicity: -0.7, charge: 0, polarity: 1 },  // Thr
  W: { volume: 227.8, hydrophobicity: -0.9, charge: 0, polarity: 0 },  // Trp
  Y: { volume: 193.6, hydrophobicity: -1.3, charge: 0, polarity: 1 },  // Tyr
  V: { volume: 140.0, hydrophobicity: 4.2, charge: 0, polarity: 0 },   // Val
};

export const GENE_DATABASE: Record<string, GeneInfo> = {
  TP53: {
    id: "TP53",
    name: "TP53",
    fullName: "Tumor Protein p53",
    pdbId: "1TUP",
    residueOffset: 94, // Focus on core DNA-binding domain
    uniprot: "P04637",
    function: "Acts as a tumor suppressor in many tumor types; cell cycle regulator, induces apoptosis and growth arrest. Known as the 'Guardian of the Genome'.",
    wildtypeCodingSeq: "ATGGAGGAGCCGCAGTCAGATCCTAGCGTCGAGCCCCCTCTGAGTCAGGAAACATTTTCAGACCTATGGAAACTACTTCCTGAAAACAACGTTCTGTCCCCCTTGCCGTCCCAAGCAATGGATGATTTGATGCTGTCCCCGGACGATATTGAACAATGGTTCAGCGAAGACCCAGGTCCAGATGAAGCTCCCAGAATGCCAGAGGCTGCTCCCCCCGTGGCCCCTGCACCAGCAGCTCCTACACCGGCGGCCCCTGCACCAGCCCCCTCCTGGCCCCTGTCATCTTCTGTCCCTTCCCAGAAAACCTACCAGGGCAGCTACGGTTTCCGTCTGGGCTTCTTGCATTCTGGGACAGCCAAGTCTGTGACTTGCACGTACTCCCCTGCCCTCAACAAGATGTTTTGCCAAGTGGCCAAAACCTGCCCTGTGCAGCTGTGGGTTGATTCCACACCCCCGCCCGGCACCCGCGTCCGCGCCATGGCCATCTACAAGCAGTCACAGCACATGACGGAGGTTGTGAGGCGCTGCCCCCACCATGAGCGCTGCTCAGATAGCGATGGTCTGGCCCCTCCTCAGCATCTTATCCGAGTGGAAGGAAATTTGCGTGTGGAGTATTTGGATGACAGAAACACTTTTCGACATAGTGTGGTGGTGCCCTATGAGCCGCCTGAGGTTGGCTCTGACTGTACCACCATCCACTACAACTACATGTGTAATAGTTCCTGCATGGGCGGCATGAACCGGAGGCCCATCCTCACCATCATCACACTGGAAGACTCCAGTGGTAATCTACTGGGACGGAACAGCTTTGAGGTGCGTGTTTGTGCCTGTCCTGGGAGAGACCGGCGCACAGAGGAAGAGAATCTCCGCAAGAAAGGGGAGCCTCACCACGAGCTGCCCCCAGGGAGCACTAAGCGAGCACTGCCCAACAACACCAGCTCCTCTCCCCAGCCAAAGAAGAAACCACTGGATGGAGAATATTTCACCCTTCAGATCCGTGGGCGTGAGCGCTTCGAGATGTTCCGAGAGCTGAATGAGGCCTTGGAACTCAAGGATGCCCAGGCTGGGAAGGAGCCAGGGGGGAGCAGGGCTCACTCCAGCCACCTGAAGTCCAAAAAGGGTCAGTCTACCTCCCGCCATAAAAAACTCATGTTCAAGACAGAAGGGCCTGACTCAGACTGA",
    wildtypeProteinSeq: "MEEPQSDPSVEPPLSQETFSDLWKLLPENNVLSPLPSQAMDDLMLSPDDIQPWFTEDPGPDEAPRMPEAAPPVAPAPAAPTPAAPAPAPSWPLSSSVPSQKTYQGSYGFRLGFLHSGTAKSVTCTYSPALNKMFCQLAKTCPVQLWVDSTPPPGTRVRAMAIYKQSQHMTEVVRRCPHHERCSDSDGLAPPQHLIRVEGNLRVEYLDDRNTFRHSVVVPYEPPEVGSDCTTIHYNYMCNSSCMGGMNRRPILTIITLEDSSGNLLGRNSFEVRVCACPGRDRRTEEENLRKKGEPHHELPPGSTKRALPNNTSSSPQPKKKPLDGEYFTLQIRGRERFEMFRELNEALELKDAQAGKEPGGSRAHSSHLKSKKGQSTSRHKKLMFKTEGPDSD",
    commonMutations: [
      {
        mutation: "R273H",
        residue: 273,
        wtAA: "R",
        mutAA: "H",
        clinvarId: "12353",
        pathogenicity: "Pathogenic",
        probability: 0.98,
      },
      {
        mutation: "R248Q",
        residue: 248,
        wtAA: "R",
        mutAA: "Q",
        clinvarId: "12354",
        pathogenicity: "Pathogenic",
        probability: 0.97,
      },
      {
        mutation: "R175H",
        residue: 175,
        wtAA: "R",
        mutAA: "H",
        clinvarId: "12350",
        pathogenicity: "Pathogenic",
        probability: 0.99,
      },
      {
        mutation: "P72R",
        residue: 72,
        wtAA: "P",
        mutAA: "R",
        clinvarId: "12330",
        pathogenicity: "Benign",
        probability: 0.05,
      }
    ],
  },
  BRCA1: {
    id: "BRCA1",
    name: "BRCA1",
    fullName: "BRCA1 DNA Repair Associated",
    pdbId: "1JNX",
    residueOffset: 1, // RING finger domain
    uniprot: "P38398",
    function: "E3 ubiquitin-protein ligase inside BRCA1-BARD1 complex, critical for DNA double-strand break repair via homologous recombination. Key breast and ovarian cancer susceptibility gene.",
    wildtypeCodingSeq: "ATGGATTTATCTGCTCTTCGCGTTGAAGAAGTACAAAATGTCATTAATGCTATGCAGAAAATCTTAGAGTGTCCCATCTGTCTGGAGTTGATCAAGGAACCTGTCTCCACAAAGTGTGACCACATATTTTGCAAATTTTGCATGCTGAAACTTCTCAACCAGAAGAAAGGGCCTTCACAATGTCCTTTGTGTAAGAATGAGATAACCAAAAGGAGCCTACAAGAAAGTACGAGATTTAGTCAACTTGTTGAAGAGCTATTGAAAATCATTTGTGCTTTTCAGCTTGACACAGGTTTGGAGTATGCAAACAGCTATAATTTTGCAAAAAAGGAAAATAACTCTCCTGAACATCTAAAAGATGAAGTTTCTATCATCCAAAGTATGGGCTACAGAAACCGTGCCAAAAGACTTCTACAGAGTGAACCCGAAAATCCTTCCTTGCAGGAAACCAGTCTCAGTGTCCAACTCTCTAACCTTGGAACTGTGAGAACTCTGAGGACAAAGCAGCGGATACAACCTCAAAAGACGTCTGTCTACATTGAATTGGGATCTGATTCTTCTGAAGATACCGTTAATAAGGCAACTTATTGCAGTGTGGGAGATCAAGAATTGTTACAAATCACCCCTCAAGGAACCAGGGATGAAATCAGTTTGGATTCTGCAAAAAAGGCTGCTTGTGAATTTTCTGAGACGGATGTAACAAATACTGAACATCATCAACCCAGTAATAATGATTTGAACACCACTGAGAAGCGTGCAGCTGAGAGGCATCCAGAAAAGTATCAGGGTAGTTCGTTACCAAAACTATTCAACTTGAGCAAGCCTAAAGATGAATCTTCAGGGCTTTGA",
    wildtypeProteinSeq: "MDLSALRVEEVQNVINAMQKILECPICLELIKEPVSTKCDHIFCKFCMLKLLNQKKGPSQCPLCKNEITKRSLQESTRFSQLVEELLKIICAFQLDTGLEYANSYNFAKKENNSPEHLKDEVSIHQSMGYRNRAKRLLQSEPENPSLQETSLSVQLSNLGTVRTLRTKQRIQPQKTSVYIELGSDISEDTVNKATYCSVGDQELLQITPQGTRDEISLDSAKKAACEFSETDVTNTEHHQPSNNDLNTTEKRAAERHPEKYQGSSLPKLFNLSKPKDESSGL",
    commonMutations: [
      {
        mutation: "C61G",
        residue: 61,
        wtAA: "C",
        mutAA: "G",
        clinvarId: "55476",
        pathogenicity: "Pathogenic",
        probability: 0.96,
      },
      {
        mutation: "C64G",
        residue: 64,
        wtAA: "C",
        mutAA: "G",
        clinvarId: "55478",
        pathogenicity: "Pathogenic",
        probability: 0.97,
      },
      {
        mutation: "Y105C",
        residue: 105,
        wtAA: "Y",
        mutAA: "C",
        clinvarId: "37424",
        pathogenicity: "Likely Pathogenic",
        probability: 0.82,
      },
      {
        mutation: "S1613G",
        residue: 1613,
        wtAA: "S",
        mutAA: "G",
        clinvarId: "55513",
        pathogenicity: "Benign",
        probability: 0.08,
      }
    ],
  },
  EGFR: {
    id: "EGFR",
    name: "EGFR",
    fullName: "Epidermal Growth Factor Receptor",
    pdbId: "1M17",
    residueOffset: 696, // Focused on intracellular kinase domain (contains 790 pocket)
    uniprot: "P00533",
    function: "Receptor tyrosine kinase binding ligands of the EGF family to activate cell proliferation. Mutations are strongly implicated in non-small cell lung cancer (NSCLC) and glioblastoma.",
    wildtypeCodingSeq: "ATGCGACCCTCCGGGACGGCCGGGGCAGCGCTCCTGGCGCTGCTGGCTGCGCTCTGCCCGGCGAGTCGGGCTCTGGAGGAAAAGAAAGTTTGCCAAGGCACGAGTAACAAGCTCACGCAGTTGGGCACTTTTGAAGATCATTTTCTCAGCCTCCAGAGGATGTTCAATAACTGTGAGGTGGTCCTTGGGAATTTGGAAATTACCTATGTGCAGAGGAATTATGATCTTTCCTTCTTAAAGACCATCCAGGAGGTGGCTGGTTATGTCCTCATTGCCCTCAACACAGTGGAGCGAATCCCTTTGGAAAACCTGCAGATCATCAGAGGAAATATGTACTACGAAAATTCCTATGCCTTAGCAGTCTTATCTAACTATGATGCAAATAAAACCGGACTGAAGGAGCTGCCCATGAGAAATTTACAGGAAATCCTGCATGGCGCCGTGCGGTTCAGCAACAACCCTGCCCTGTGCAACGTGGAGAGCATCCAGTGGCGGGACATAGTCAGCAGTGACTTTCTCAGCAACATGTCGATGGACTTCCAGAACCACCTGGGCAGCTGCCAAAAGTGTGACCCAAGCTGTCCCAATGGGAGCTGCTGGGGTGCAGGAGAGGAGAACTGCCAGAAACTGACCAAAATCATCTGTGCCCAGCAGTGCTCCGGGCGCTGCCGTGGCAAGTCCCCCAGTGACTGCTGCCACAACCAGTGTGCTGCAGGCTGCACAGGCCCCCGGGAGAGCGACTGCCTGGTCTGCCGCAAATTCCGAGACGAAGCCACGTGCAAGGACACCTGCCCCCCACTCATGCTCTACAACCCCACCACGTACCAGATGGATGTGAACCCCGAGGGCAAATACAGCTTTGGTGCCACCTGCGTGAAGAAGTGTCCCCGTAATTATGTGGTGACAGATCACGGCTCGTGCGTCCGAGCCTGTGGGGCCGACAGCTATGAGATGGAGGAAGACGGCGTCCGCAAGTGTAAGAAGTGCGAAGGGCCTTGCCGCAAAGTGTGTAACGGAATAGGTATTGGTGAATTTAAAGACTCACTCTCCATAAATGCTACGAATATTAAACACTTCAAAAACTGCACCTCCATCAGTGGCGATCTCCACATCCTGCCGGTGGCATTTAGGGGTGACTCCTTCACACATACTCCTCCTCTGGATCCACAGGAACTGGATATTCTGAAAACCGTAAAGGAAATCACAGGGTTTTTGCTGATTCAGGCTTGGCCTGAAAACAGGACGGACCTCCATGCCTTTGAGAACCTAGAAATCATACGCGGCAGGACCAAGCAACATGGTCAGTTTTCTCTTGCAGTCGTCAGCCTGAACATAACATCCTTGGGATTACGCTCCCTCAAGGAGATAAGTGATGGAGATGTGATAATTTCAGGAAACAAAAATTTGTGCTATGCAAATACAATAAACTGGAAAAAACTGTTTGGGACCTCCGGTCAGAAAACCAAAATTATAAGCAACAGAGGTGAAAACAGCTGCAAGGCCACAGGCCAGGTCTGCCATGCCTTGTGCTCCCCCGAGGGCTGCTGGGGCCCGGAGCCCAGGGACTGCGTCTCTTGCCGGAATGTCAGCCGAGGCAGGGAATGCGTGGACAAGTGCAACCTTCTGGAGGGTGAGCCAAGGGAGTTTGTGGAGAACTCTGAGTGCATACAGTGCCACCCAGAGTGCCTGCCTCAGGCCATGAACATCACCTGCACAGGACGGGGACCAGACAACTGTATCCAGTGTGCCCACTACATTGACGGCCCCCACTGCGTCAAGACCTGCCCGGCAGGAGTCATGGGAGAAAACAACACCCTGGTCTGGAAGTACGCAGACGCCGGCCATGTGTGCCACCTGTGCCATCCAAACTGCACCTACGGATGCACTGGGCCAGGTCTTGAAGGCTGTCCAACGAATGGGCCTAAGATCCCGTCCATCGCCACTGGGATGGTGGGGGCCCTCCTCTTGCTGCTGGTGGTGGCCCTGGGGATCGGCCTCTTCATGTGA",
    wildtypeProteinSeq: "MRPSGTAGAALLALLAALCPASRALEEKKVCQGTSNKLTQLGTFADHFLSLQRMFNNCEVVLGNLEITYVQRNYDLSFLKTIQEVAGYVLIALNTVERIPLENLQIIRGNMYYENSYALAVLSNYDANKTGLKELPMRNLQEILHGAVRFSNNPALCNVESIQWRDIVSSDFLSNMSMDFQNHLGSCQKCDPSCPNGSCWGAGEENCQKLTKIICAQQCSGRCRGKSPSDCCHNQCAAGCTGPRESDCLVCRKFRDEATCKDTCPPLMLYNPTTYQMDVNPEGKYSFGATCVKKCPRNYVVTDHGSCVRACGADSYEMEEDGVRKCKKCEGPCRKVCNGIGIGEFKDSLSINATNIKHFKNCTSISGDLHILPVAFRGDSFTHTPPLDPQELDILKTVKEITGFLLIQAWPENRTDLHAFENLEIIRGRTKQHGQFSLAVVSLNITSLGLRSLKEISDGDVIISGNKNLCYANTINWKKLFGTSGQKTKIISNRGENSCKATGQVCHALCSPEGCWGPEPRDCVSCRNVSRGRECVDKCNLLEGEPREFVENSECIQCHPECLPQAMNITCTGRGPDNCIQCAHYIDGPHCVKTCPAGVMGENNTLVWKYADAGHVCHLCHPNCTYGCTGPGLEGCPTNGPKIPSIATGMVGALLLLLVVALGIGLFM",
    commonMutations: [
      {
        mutation: "T790M",
        residue: 790,
        wtAA: "T",
        mutAA: "M",
        clinvarId: "16560",
        pathogenicity: "Pathogenic",
        probability: 0.95,
      },
      {
        mutation: "L858R",
        residue: 858,
        wtAA: "L",
        mutAA: "R",
        clinvarId: "16562",
        pathogenicity: "Pathogenic",
        probability: 0.94,
      },
      {
        mutation: "E746_A750del",
        residue: 746,
        wtAA: "E",
        mutAA: "",
        clinvarId: "97135",
        pathogenicity: "Pathogenic",
        probability: 0.92,
      },
      {
        mutation: "Q787Q",
        residue: 787,
        wtAA: "Q",
        mutAA: "Q",
        clinvarId: "376189",
        pathogenicity: "Benign",
        probability: 0.02,
      }
    ],
  },
  KRAS: {
    id: "KRAS",
    name: "KRAS",
    fullName: "KRAS Proto-Oncogene, GTPase",
    pdbId: "4DSO",
    residueOffset: 1,
    uniprot: "P01116",
    function: "Functions as a high-affinity molecular switch transducer in EGFR signaling. Mutational activation prevents GTP hydrolysis, leading to constitutive hyperactivation of downstream MAPK and PI3K pathways, driving pancreatic, colon, and lung tumors.",
    wildtypeCodingSeq: "ATGACTGAATATAAACTTGTGGTAGTTGGAGCTGGTGGCGTAGGCAAGAGTGCCTTGACGATACAGCTAATTCAGAATCATTTTGTGGACGAATATGATCCAACAATAGAGGATTCCTACAGGAAGCAAGTAGTAATTGATGGAGAAACCTGTCTCTTGGATATTCTCGACACAGCAGGTCAAGAGGAGTACAGTGCAATGAGGGACCAGTACATGAGGACTGGGGAGGGCTTTCTTTGTGTATTTGCCATAAATAATACTAAATCATTTGAAGATATTCACCATTATAGAGAACAAATTAAAAGAGTTAAGGACTCTGAAGATGTACCTATGGTCCTAGTAGGAAATAAATGTGATTTGCCTTCTAGAACAGTAGACACAAAACAGGCTCAGGACTTAGCAAGAAGTTATGGAATTCCTTTTATTGAAACATCAGCAAAGACAAGACAGGGTGTTGATGATGCCTTTTATACATTAGTTCGAGAAATTCGAAAACATAAAGAAAAGATGAGCAAAGATGGTAAAAAGAAGAAAAAGAAGTCAAAGACAAAGTGTGTAATTATGTAA",
    wildtypeProteinSeq: "MTEYKLVVVGAGGVGKSALTIQLIQNHFVDEYDPTIEDSYRKQVVIDGETCLLDILDTAGQEEYSAMRDQYMRTGEGFLCVFAINNTKSFEDIHHYREQIKRVKDSEDVPMVLVGNKCDLPSRTVDTKQAQDLARSYGIPFIETSAKTRQGVDDAFYTLVREIRKHKEKMSKDGKKKKKKSKTKCVIM",
    commonMutations: [
      {
        mutation: "G12D",
        residue: 12,
        wtAA: "G",
        mutAA: "D",
        clinvarId: "12574",
        pathogenicity: "Pathogenic",
        probability: 0.98,
      },
      {
        mutation: "G12V",
        residue: 12,
        wtAA: "G",
        mutAA: "V",
        clinvarId: "12582",
        pathogenicity: "Pathogenic",
        probability: 0.97,
      },
      {
        mutation: "Q61H",
        residue: 61,
        wtAA: "Q",
        mutAA: "H",
        clinvarId: "12589",
        pathogenicity: "Pathogenic",
        probability: 0.95,
      },
      {
        mutation: "K117N",
        residue: 117,
        wtAA: "K",
        mutAA: "N",
        clinvarId: "43232",
        pathogenicity: "Likely Pathogenic",
        probability: 0.88,
      }
    ],
  },
  PTEN: {
    id: "PTEN",
    name: "PTEN",
    fullName: "Phosphatase and Tensin Homolog",
    pdbId: "1D5R",
    residueOffset: 1,
    uniprot: "P60484",
    function: "Tumor suppressor that acts as a dual-specificity lipid and protein phosphatase. Dephosphorylates PIP3 to PIP2, directly counteracting PI3K critical pathway activation. Deficiencies lead to unlimited AKT-driven survival, causing glioblastoma and prostate carcinomas.",
    wildtypeCodingSeq: "ATGACAGCCATCATCAAAGAGATCGTTAGCAGAAACAAAAGGAGATATCAAGAGGATGGATTCGACTTAGACTTGACCTATATTTATCCAAACATTATTGCTATGGGATTTCCTGCAGAAAGACTTGAAGGCGTATACAGGAACAATATTGATGATGTAGTAAGGTTTTTGGATTCAAAGCATAAAAACCATTACAAGATATACAATCTTTGTGCTGAAAGACATTATGACACCGCCAAATTTAATTGCAGAGTTGCACAATATCCTTTTGAAGACCATAACCCACCACAGCTAGAACTTATCAAACCCTTTTGTGAAGATCTTGACCAATGGCTAAGTGAAGATGACAATCATGTTGCAGCAATTCACTGTAAAGCTGGAAAGGGACGAACTGGTGTAATGATATGTGCATATTTATTACATCGGGGCAAATTTTTAAAGGCACAAGAGGCCCTAGATTTTTATGGGGAAGTAAGGACCAGAGACAAAAAGGGAGTAACTATTCCCAGTCAGAGGCGCTATGTGTATTATTATAGCTACCTGTTTAAGAATCATCTGGATTATAGACCAGTGGCACTGTTGTTTCACAAGATGATGTTTGAAACTATTCCAATGTTCAGTGGCGGCACATGCAATCCTCAATTTGTGGTCTGCCAGCTAAAGGTGAAGATATATTCCTCCAATTCAGGACCCACACGACGGGAAGACAAGTTCATGTACTTTGAGTTCCCTCAGCCGTTACCTGTGTGTGGTGATATCAAAGTAGAGTTCTTCCACAAACAGAACAAGATGCTAAAAAAGGACAAAATGTTTCACTTTTGGGTAAATACATTCTTCATACCAGGACCAGAGGAAACCTCAGAAAAAGTAGAAAATGGAAGTCTATGTGATCAAGAAATCGATAGCATTTGCAGTATAGAGCGTGCAGATAATGACAAGGAATATCTAGTACTTACTTTAACAAAAAATGATCTTGACAAAGCAAATAAAGACAAAGCCAACCGATACTTTTCTCCAAATTTTAAGGTGAAGCTATACTTCACAAAAACAGTAGAGGAGCCGTCAAATCCAGAGGCTAGCAGTTCAACTTCTGTAACACCAGATGTTAGTGACAATGAACCTGATCATTATAGATATTCTGACACCACTGACTCTGATCCAGAGAATGAACCTTTTGATGAAGATCAGCATACACAAATTACAAAAGTCTGA",
    wildtypeProteinSeq: "MTAIIKEIVSRNKRRYQEDGFDLDLTYIYPNIIAMGFPAERLEGVYRNNIDDVVRFLDSKHKNHYKIYNLCAERHYDTAKFNCRVAQYPFEDHNPPQLELIKPFCEDLDQWLSEDDNHVAAIHCKAGKGRTGVMICAYLLHRGKFLKAQEALDFYGEVRTRDKKGVTIPSQRRYVYYYSYLFKNHLDYRPVALLFHKMMFETIPMFSGGTCNPQFVVCQLKVKIYSSNSGPTRREDKFMYFEFPQPLPVCGDIKVEFFHKQNXMLKKDKMFHFWVNTFFIPGPEETSEKVENGSLCDQEIDSICSIERADNDKEYLVLTLTKNDLDKANKDKANRYFSPNFKVKLYFTKTVEEPSNPEASSSTSVTPDVSDNEPDHYRYSDTTDSDPENEPFDEDQHTQITKV",
    commonMutations: [
      {
        mutation: "R130Q",
        residue: 130,
        wtAA: "R",
        mutAA: "Q",
        clinvarId: "14227",
        pathogenicity: "Pathogenic",
        probability: 0.96,
      },
      {
        mutation: "R173C",
        residue: 173,
        wtAA: "R",
        mutAA: "C",
        clinvarId: "14236",
        pathogenicity: "Pathogenic",
        probability: 0.95,
      },
      {
        mutation: "G129E",
        residue: 129,
        wtAA: "G",
        mutAA: "E",
        clinvarId: "14225",
        pathogenicity: "Pathogenic",
        probability: 0.97,
      },
      {
        mutation: "H93R",
        residue: 93,
        wtAA: "H",
        mutAA: "R",
        clinvarId: "184511",
        pathogenicity: "Likely Pathogenic",
        probability: 0.86,
      }
    ],
  },
  BRAF: {
    id: "BRAF",
    name: "BRAF",
    fullName: "B-Raf Proto-Oncogene, Serine/Threonine Kinase",
    pdbId: "3IDS",
    residueOffset: 440,
    uniprot: "P15056",
    function: "Serine/threonine kinase transducing signals from RAS to MEK. Activating mutations, most notably the hot-spot V600E substitution, mimic activating phosphorylation within the kinase domain activation loop, driving melanoma, colorectal cancer, and thyroid carcinomas.",
    wildtypeCodingSeq: "ATGCGGCGGCGGGGCCGCGGCCGCCGGCCCGGGCCCGAGCCCGAGCCGGAGCCGGAGCCGCAGGCGCCCAGCCCGGTGCCCGAACAGGGCTCCAGCGAGGCCGAGCCCTCGGAGGGCGCCGACCCCGACCCGGAGGTGGCCGCCGAGCTGGCCGCCGAGCTGGCCGCCGAGCTGGCCGAGGCCACGGAGGACGAGGCGCGCAAGCTGCGGGACGAGCACGGGCGCGACCTGGCGGCCGACCTGGCGGCCGAGCTGGCCCGCCGGCTGCGGGACGAGCTGGAACGGGAACGGGCCGGCGGCCCGGAGGCCGGGGAGGCCGGGGCCGGGGAGGAGGCGGAGCTGGAGGCGCGGCGCCGGCAGATCCTGCAGGAGGGCCTGGAGTGCCTGCGCGTGCGGCGGGGCCGGCGGCGGCGGCGGCGGCGGGAGGAGCTGGAGCAGCGCGTGGA",
    wildtypeProteinSeq: "MAALSGGGGGGAEPGQALFNGDMEPEAGAGAGAAASSAADPAIPEEVWNIKQMIKLTQEHIEALDKFGGQHNPPDILQSLRSLRQLRQLNQPNSGQPQPQPQPGQPQPQPGQPQPQ",
    commonMutations: [
      {
        mutation: "V600E",
        residue: 600,
        wtAA: "V",
        mutAA: "E",
        clinvarId: "13961",
        pathogenicity: "Pathogenic",
        probability: 0.99,
      },
      {
        mutation: "G469A",
        residue: 469,
        wtAA: "G",
        mutAA: "A",
        clinvarId: "13982",
        pathogenicity: "Pathogenic",
        probability: 0.91,
      },
      {
        mutation: "L597V",
        residue: 597,
        wtAA: "L",
        mutAA: "V",
        clinvarId: "376241",
        pathogenicity: "Likely Pathogenic",
        probability: 0.85,
      },
      {
        mutation: "A728V",
        residue: 728,
        wtAA: "A",
        mutAA: "V",
        clinvarId: "13959",
        pathogenicity: "Benign",
        probability: 0.05,
      }
    ],
  },
  CFTR: {
    id: "CFTR",
    name: "CFTR",
    fullName: "CF Transmembrane Conductance Regulator",
    pdbId: "5U1D",
    residueOffset: 1,
    uniprot: "P13569",
    function: "Functions as an ATP-gated chloride/bicarbonate channel in secreting epithelial cells. Recessive defects lead to fluid imbalances in pulmonary and digestive systems, promoting sticky mucus accumulation, recurrent infections, and Cystic Fibrosis diagnosis.",
    wildtypeCodingSeq: "AATTGGAAGCAAATGACATCACAGCAGGTCAGAGAAAAAGGGTTCGACTGGACTTGA",
    wildtypeProteinSeq: "MQRSPLEKASVVSKLFFSWTRPILRKGYRQRLELSDIYQIPSVDSADNLSEKLEREWDRELA",
    commonMutations: [
      {
        mutation: "G551D",
        residue: 551,
        wtAA: "G",
        mutAA: "D",
        clinvarId: "7135",
        pathogenicity: "Pathogenic",
        probability: 0.97,
      },
      {
        mutation: "R117H",
        residue: 117,
        wtAA: "R",
        mutAA: "H",
        clinvarId: "7105",
        pathogenicity: "Likely Pathogenic",
        probability: 0.75,
      },
      {
        mutation: "R553X",
        residue: 553,
        wtAA: "R",
        mutAA: "X",
        clinvarId: "7137",
        pathogenicity: "Pathogenic",
        probability: 0.99,
      },
      {
        mutation: "L206W",
        residue: 206,
        wtAA: "L",
        mutAA: "W",
        clinvarId: "7111",
        pathogenicity: "Likely Pathogenic",
        probability: 0.82,
      }
    ],
  }
};
