export interface MutationDetail {
  position: number;
  wildtype: string;
  mutant: string;
  type: "Substitution" | "Insertion" | "Deletion" | "Match";
  ntPosition?: number;
  wtCodon?: string;
  mutCodon?: string;
  effect?: string;
}

export interface SequenceAnalysisResult {
  gcContent: number;
  length: number;
  purines: number;
  pyrimidines: number;
  atgCount: number;
  orfs: Array<{
    frame: number;
    start: number;
    end: number;
    length: number;
    sequence: string;
    protein: string;
  }>;
  translation: string;
  codonUsage: Record<string, number>;
  baseComposition: {
    A: number;
    C: number;
    G: number;
    T: number;
  };
}

export interface AlignmentResult {
  score: number;
  similarity: number;
  gaps: number;
  matches: number;
  alignedSeqA: string;
  alignedSeqB: string;
  mutations: MutationDetail[];
  alignmentLength: number;
}

export interface FeatureImpactMetrics {
  volumeDiff: number;
  hydrophobicityDiff: number;
  chargeDiff: number;
  polarityDiff: number;
  conservationScore: number;
  pathogenicityScore: number;
}

export interface PredictionResult {
  gene: string;
  mutation: string;
  pdbId: string;
  residueIndex: number;
  isPathogenic: boolean;
  probability: number;
  features: FeatureImpactMetrics;
  clinVarStatus: string;
  clinVarId?: string;
  aiReport: string;
  recommendedTherapies?: string[];
  affectedMotifs?: string[];
}

export interface GeneInfo {
  id: string;
  name: string;
  fullName: string;
  pdbId: string;
  residueOffset: number;
  uniprot: string;
  function: string;
  wildtypeCodingSeq: string;
  wildtypeProteinSeq: string;
  commonMutations: Array<{
    mutation: string;
    residue: number;
    wtAA: string;
    mutAA: string;
    clinvarId: string;
    pathogenicity: string;
    probability: number;
  }>;
}
