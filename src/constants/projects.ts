import { Activity, BrainCircuit } from "lucide-react";
import { SOCIALS } from "@/constants/site";
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "ai-trader",
    name: "AI Trader",
    icon: BrainCircuit,
    tagline: "Real-Time Algorithmic Trading System",
    summary:
      "A real-time algorithmic trading system that ingests live market data, generates ML-driven signals, and automates risk-governed order execution across 250+ NSE stocks — all running on a single low-memory cloud instance.",
    period: "2026",
    featured: true,
    stack: [
      "Python",
      "FastAPI",
      "XGBoost",
      "WebSocket",
      "SQLite",
      "Pandas",
      "NumPy",
      "APScheduler",
      "GCP",
    ],
    highlights: [
      "250+ NSE stocks processed in real time",
      "56 engineered features, walk-forward validated",
      "266K+ OHLCV training samples",
      "Runs on a single GCP e2-medium instance",
    ],
    architecture: [
      "DhanHQ WebSocket",
      "Market Feed",
      "Feature Engineering",
      "Signal Engine (ML)",
      "Risk Governor",
      "Execution Engine",
      "SQLite",
      "Telegram",
    ],
    features: [
      "Live market data ingestion over WebSocket with a shared market-data feed across all consumers.",
      "ML-driven signal engine: 56 engineered features, XGBoost models, probability calibration, and walk-forward validation.",
      "A single shared engine powering both live trading and deterministic backtesting from the same code path.",
      "Configurable risk governor enforcing position and exposure limits before any order reaches the execution engine.",
      "Asynchronous scheduling with APScheduler for strategy runs, model retraining, and housekeeping.",
      "Telegram-based operations: alerts, status, and remote control of the running system.",
      "Heartbeat-based monitoring with automated recovery for production resilience.",
    ],
    challenges: [
      {
        problem:
          "Running a real-time trading system on a single GCP e2-medium (2 vCPU, 4 GB RAM) without dropping ticks.",
        difficulty:
          "Naive per-symbol feature computation recomputed full windows on every tick across 250+ symbols, blowing past CPU and memory budgets and adding latency.",
        solution:
          "Implemented incremental feature computation that updates rolling state per tick, a single shared market-data feed fanned out to all consumers, and lightweight SQLite for persistence instead of a heavyweight database.",
        tradeoff:
          "Incremental state is harder to reason about and must stay perfectly in sync with the batch path used for training; SQLite trades multi-writer concurrency for a tiny footprint.",
        outcome:
          "The full pipeline runs comfortably within the e2-medium budget while sustaining real-time throughput across 250+ symbols.",
      },
      {
        problem:
          "Backtest results and live results diverged, making it impossible to trust offline validation.",
        difficulty:
          "Separate live and backtest code paths drift apart — subtle differences in feature timing or look-ahead silently invalidate results.",
        solution:
          "Unified live and backtest behind one shared engine so the exact same feature and inference code runs in both modes, with deterministic backtesting and walk-forward validation on 266K+ samples.",
        tradeoff:
          "A shared engine adds abstraction and constrains how aggressively the live path can be micro-optimized in isolation.",
        outcome:
          "Backtests became trustworthy and reproducible, with parity between offline validation and live inference.",
      },
      {
        problem:
          "Keeping a long-running stateful system alive and consistent across restarts and broker disconnects.",
        difficulty:
          "WebSocket disconnects, process restarts, and partial state loss can corrupt positions or duplicate orders.",
        solution:
          "Added persistent state management, heartbeat-based health checks with automated recovery, and idempotent reconnection logic for the broker REST/WebSocket integrations.",
        tradeoff:
          "Persisting and reconciling state on every change costs extra I/O and code complexity versus an in-memory-only design.",
        outcome:
          "The system recovers from disconnects and restarts without manual intervention or inconsistent state.",
      },
    ],
    performance: [
      "Incremental feature computation replaces full-window recomputation on every tick.",
      "A single shared market-data feed eliminates duplicate subscriptions and parsing across consumers.",
      "Scheduled task orchestration spreads CPU-heavy work (retraining, housekeeping) off the hot path.",
      "Lightweight SQLite persistence keeps the memory footprint small enough for an e2-medium instance.",
    ],
    deployment: [
      "Deployed on a GCP e2-medium instance running Linux.",
      "Asynchronous scheduling via APScheduler for retraining and orchestration.",
      "Heartbeat-based monitoring with automated recovery for unattended operation.",
      "Telegram integration for operations, alerts, and remote control.",
    ],
    roadmap: [
      "Containerize the pipeline with Docker for reproducible deployments.",
      "Add a metrics dashboard for live latency, throughput, and model drift.",
      "Expand model ensemble and online calibration.",
    ],
    links: {
      github: "https://github.com/kxpil09/AI-Trader",
      telegram: SOCIALS.telegram,
    },
  },
  {
    slug: "systemlens",
    name: "SystemLens",
    icon: Activity,
    tagline: "Infrastructure Monitoring Platform",
    summary:
      "A distributed infrastructure monitoring platform that collects 10+ system metrics from multiple hosts, streams them in real time, and surfaces them through Grafana dashboards with an intelligent alerting engine.",
    period: "2026",
    featured: true,
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "WebSocket",
      "Grafana",
      "psutil",
    ],
    highlights: [
      "10+ system metrics per host",
      "Real-time WebSocket streaming",
      "Grafana dashboards + alerting",
      "Multi-host, centralized observability",
    ],
    architecture: ["Agents", "FastAPI", "PostgreSQL", "Grafana"],
    features: [
      "Lightweight agents collect 10+ system metrics per host using psutil.",
      "FastAPI ingestion layer with configurable metric ingestion and batch processing.",
      "Retry mechanisms for reliable, low-latency telemetry under transient failures.",
      "Real-time WebSocket streaming of live metrics to consumers.",
      "Grafana-powered dashboards for historical and live views.",
      "Intelligent alerting engine with configurable thresholds, anomaly detection, and trend analysis.",
    ],
    challenges: [
      {
        problem:
          "Collecting metrics from many hosts reliably without overwhelming the ingestion API.",
        difficulty:
          "High-frequency per-host metrics create bursty load; dropped or out-of-order samples corrupt historical trends.",
        solution:
          "Built a telemetry pipeline with configurable ingestion, batch processing, and retry mechanisms so agents buffer and resend on failure.",
        tradeoff:
          "Batching introduces a small latency vs. freshness trade-off and requires careful backpressure handling.",
        outcome:
          "Reliable, low-latency collection across multiple hosts even during transient network issues.",
      },
      {
        problem:
          "Turning raw metrics into actionable signals instead of noisy dashboards.",
        difficulty:
          "Static thresholds either alert constantly or miss real incidents depending on host and time of day.",
        solution:
          "Added an alerting engine with configurable thresholds, anomaly detection, and historical trend analysis to catch deviations proactively.",
        tradeoff:
          "Anomaly detection adds tuning overhead and the risk of false positives that must be calibrated per metric.",
        outcome:
          "Proactive alerts on meaningful deviations rather than fixed thresholds alone.",
      },
    ],
    performance: [
      "Batch processing reduces per-request overhead on the ingestion API.",
      "WebSocket streaming avoids polling for live views.",
      "PostgreSQL retention and indexing tuned for historical trend queries.",
    ],
    deployment: [
      "Containerized with Docker for consistent multi-host deployment.",
      "PostgreSQL for durable metric storage and historical analysis.",
      "Grafana for dashboards and visualization.",
    ],
    roadmap: [
      "Add agent auto-discovery and registration.",
      "Support pluggable storage backends.",
      "Expand anomaly detection models.",
    ],
    links: {
      github: "https://github.com/System-Information-and-Performance-Monitor",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
