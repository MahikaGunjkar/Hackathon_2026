import pandas as pd

WEIGHTS = {
    'Region': {'European Union': 1.5, 'North America': 1.1, 'APAC': 1.0},
    'Industry': {'Technology': 1.0, 'Manufacturing': 1.4, 'Fashion': 1.2}
}

def run_audit(df, industry, region):
    results = []
    reg_pressure = WEIGHTS['Region'].get(region, 1.0) * WEIGHTS['Industry'].get(industry, 1.0)

    for _, row in df.iterrows():
        metric = row['Metric']
        current = float(row['Current_Value'])
        target = float(row['Target_Goal'])
        
        is_high_good = any(word in metric.lower() for word in ['efficiency', 'recycle', 'share', '%'])
        
        if is_high_good:
            base_score = (current / target) * 100 if target != 0 else 0
        else:
            base_score = (target / current) * 100 if current != 0 else 0

        final_score = round(min(max(base_score / reg_pressure, 0), 100), 1)
        risk = "High" if final_score < 40 else "Medium" if final_score < 75 else "Low"
        
        results.append({
            "metric": metric, "score": final_score, "risk": risk,
            "current": current, "target": target, "unit": row['Unit']
        })
    return results