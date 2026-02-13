
# 🛡️ SCOTTYSCOPE | Audit Intelligence

**TartanHacks 2026** *Automated ESG Governance & Technical Remediation*

## 📖 Overview

SCOTTYSCOPE is a full-stack automated auditor that transforms messy sustainability data into actionable engineering roadmaps. Developed during **TartanHacks 2026**, the platform bridges the gap between raw corporate data and complex regional ESG regulations (ESRS, SEC).

### The Challenge

Most companies have the data but lack the domain expertise to interpret it or the engineering knowledge to fix it. I entered this hackathon with zero prior knowledge of sustainability, requiring a rapid 24-hour deep dive into carbon accounting and regulatory frameworks to build this system.

---

## 🛠️ Technical Architecture

### 1. The Quantitative Engine (Python/Pandas)

Unlike standard AI wrappers, SCOTTYSCOPE utilizes a custom **Math Engine** to handle all scoring. This prevents "LLM Hallucinations" by decoupling mathematical logic from text generation.

* **Weighted Risk Logic:** Calculates scores based on Industry (Tech vs. Manufacturing) and Regional (EU vs. NA) regulatory pressure.
* **Metric Delta Analysis:** Computes the exact variance between `Current_Value` and `Target_Goal`.

### 2. The Generative Layer (Gemini 1.5 Flash)

Once the math is verified, the system passes the context to **Gemini 1.5 Flash**.

* **Data-Driven Prompting:** The AI acts as a technical ESG engineer to suggest specific hardware/software fixes.
* **Dynamic Fallback System:** A robust error-handling layer that ensures 100% uptime and insight variety even during API rate limits.

### 3. Reactive Frontend (React/Tailwind)

* **Glassmorphic UI:** Designed for high scannability of risk metrics.
* **Interactive Templates:** Industry-specific CSV generators to ensure data compatibility.

---

## 🚀 Tech Stack

* **Frontend:** React.js, Tailwind CSS, Lucide Icons
* **Backend:** Flask (Python), Pandas
* **AI:** Google Gemini 3 / 1.5 Flash SDK
* **Design:** Glassmorphism / Mosaic Background Logic


