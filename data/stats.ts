export interface PlatformStat {
  id: string;
  label: string;
  value: number;
  unit?: string;
  period?: string;
}

export interface StatsSnapshot {
  id: string;
  updatedAt: string;
  stats: PlatformStat[];
}

export const PLATFORM_STATS: StatsSnapshot = {
  id: "stats_001",
  updatedAt: "2026-02-01",
  stats: [
    { id: "stat_001", label: "Active Learners", value: 18420 },
    { id: "stat_002", label: "Programs Available", value: 27 },
    { id: "stat_003", label: "Course Completion Rate", value: 82, unit: "%" },
    { id: "stat_004", label: "Average Learner Rating", value: 4.7, unit: "/5" },
    { id: "stat_005", label: "Placement Support Success", value: 76, unit: "%", period: "12 months" }
  ]
};
