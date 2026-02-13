
# 🛡️ SCOTTYSCOPE | Audit Intelligence

**TartanHacks 2026** • *Automated ESG Governance & Technical Remediation*

## 📖 Overview

**SCOTTYSCOPE** is a full-stack automated auditing platform designed to bridge the "Data-Action Gap" in corporate sustainability. The system transforms raw environmental metrics into mathematically verified risk scores and AI-generated engineering roadmaps, specifically tailored to regional regulatory frameworks.

## 🎯 The Technical Challenge

In the current ESG landscape, organizations struggle with two primary hurdles that SCOTTYSCOPE was architected to solve:

1. **Mathematical Reliability:** LLMs are prone to "hallucinating" calculations. We needed a system where carbon accounting was 100% accurate while still leveraging AI for qualitative analysis.
2. **Contextual Scaling:** Sustainability metrics are not "one size fits all." A metric's risk level changes drastically based on industry (e.g., Manufacturing vs. Tech) and region (e.g., ESRS in the EU vs. SEC in North America).

### Our Solution: The Decoupled Intelligence Layer

We implemented a hybrid architecture that separates the **Quantitative Audit** (handled by a deterministic Python engine) from the **Qualitative Remediation** (handled by Gemini 1.5 Flash). This ensures that every AI-generated fix is triggered by a verified mathematical delta.

---

## 🛠️ System Architecture

### 1. Quantitative Risk Engine (Python/Pandas)

A deterministic backend that processes raw CSV data through a weighted logic matrix:

* **Weighted Scoring:** Adjusts risk thresholds based on industry-specific benchmarks and regional regulatory pressure.
* **Delta Analysis:** Computes precise variances between `Current_Value` and `Target_Goal` to identify high-risk compliance gaps.

### 2. Generative Remediation Layer (Gemini 1.5 Flash)

Once the math is verified, the system utilizes **Data-Driven Prompting**:

* **Technical Remediation:** Acts as a virtual ESG engineer to suggest hardware-level or software-protocol fixes (e.g., PUE optimization, IoT sensor deployment).
* **Dynamic Fallback System:** Built-in redundancy that maintains insight variety and system uptime even during API rate-limiting or network constraints.

### 3. Reactive Dashboard (React/Tailwind CSS)

* **Glassmorphic Interface:** Optimized for high scannability of risk levels (High/Medium/Low).
* **Dynamic Templates:** Generates industry-specific data schemas to ensure seamless data ingestion.

---

## 🚀 Tech Stack

* **Frontend:** React.js, Tailwind CSS, Lucide Icons
* **Backend:** Flask (Python), Pandas
* **AI/LLM:** Google Gemini 1.5 Flash SDK
* **Domain Knowledge:** ESRS (EU) and SEC (NA) Sustainability Standards

