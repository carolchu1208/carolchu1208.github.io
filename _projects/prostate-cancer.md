---
layout: project
title: Prostate Cancer Prediction - ML Clinical Decision Support
summary: Award-winning ML model achieving 87% recall on 73,530 patients to reduce unnecessary biopsies while maintaining clinical safety standards.
tags: [Healthcare ML, Clinical Decision Support, Random Forest, SMOTE, Award-Winning]
tech_stack: [Python, Scikit-learn, Random Forest, SMOTE, GridSearchCV, Pandas, NumPy]
github_repo: https://github.com/carolchu1208/ML_ProstateCancerPrediction
status: Bronze Prize - Clark University Analytics Competition (April 2024)
---

## 1. 🎯 Problem Statement & Clinical Goal

**The Challenge:** Prostate cancer affects **13 out of 100 American men** during their lifetime. Biopsies are the only definitive diagnostic method, but they carry significant risks (bleeding, infection, pain) and cost the US healthcare system **$12 billion annually**. Many biopsies are performed on healthy patients due to conservative screening protocols.

**The Goal:** Develop a machine learning model to **pre-screen patients** and identify those at highest risk, enabling physicians to:
- Reduce unnecessary biopsies by 20-30%
- Maintain **≥80% recall** (clinical safety requirement)
- Provide interpretable predictions for medical decision-making

**Critical Constraint:** In healthcare, **false negatives are dangerous** (missing cancer is worse than extra biopsies). The model must prioritize **recall over accuracy**.

---

## 2. 🏗️ Data Pipeline & Feature Engineering

![Methodology Flow](/assets/images/prostate-cancer-preview.jpg)

### A. Dataset Characteristics

**Source:** National Institute of Health (NIH) - PLCO Cancer Screening Trial
- **76,678 initial observations** with 214 variables
- **After eligibility filtering:** 73,530 patients
- **Severe class imbalance:** 12% Cancer / 88% Healthy (88:12 ratio)

### B. Data Cleaning & Feature Selection

**Cleaning Steps:**
1. Removed participant identifiers for privacy protection
2. Filtered for study eligibility (no prior prostate cancer history)
3. Retained only participants with PSA test results
4. Reduced from **214 variables → 21 clinically relevant features**

**Features Selected:**
- **Clinical Tests:** PSA Level 1 & 2, DRE Result 1 & 2 (primary predictors)
- **Demographics:** Age, Race, Height, Weight, BMI, Education
- **Lifestyle:** Smoking History (current, former, never)
- **Engineered Features:** PSA percentage change, DRE trends, BMI categories

**Key Finding from EDA:**
- **PSA Level AUC: 0.82** (individual feature)
- **DRE Result AUC: 0.80** (individual feature)
- Age 60-64: 34.45% of diagnosed patients (peak risk)
- Smoking History: 60% correlation with cancer diagnosis

---

## 3. 📊 Model Selection & Validation Strategy

### Handling Severe Class Imbalance: SMOTE

**Challenge:** 88:12 class imbalance causes models to bias toward majority class (healthy patients)

**Solution:** SMOTE (Synthetic Minority Oversampling Technique)
- Generated synthetic positive examples using K-nearest neighbors
- Balanced training data: **12% → 50%** positive cases
- **Preserved test set distribution** for realistic evaluation

### Model Comparison (5 Algorithms Tested)

| Model | Accuracy | Precision | Recall | F1-Score | Clinical Viability |
|-------|----------|-----------|--------|----------|-------------------|
| Logistic Regression | 74% | 76% | **70%** | 73% | ❌ Below 80% threshold |
| Decision Tree | 83% | 82% | **84%** | 83% | ✅ Acceptable |
| **Random Forest** | **82%** | **79%** | **87%** | **83%** | ✅ **BEST** |
| XGBoost | 89% | - | **12%** | 19% | ❌ Dangerous false negatives |

### Why Random Forest Won

**Random Forest achieved:**
- ✅ **87% recall** - exceeds 80% clinical requirement
- ✅ **82% accuracy** - comparable to Decision Tree and XGBoost
- ✅ **Excellent handling of imbalanced data** with SMOTE
- ✅ **Interpretable feature importance** for clinical trust

**XGBoost Failure:** Despite 89% accuracy, only 12% recall means missing **88% of cancer cases** - clinically unacceptable. This demonstrates why **domain expertise matters**: in medical diagnosis, **recall > accuracy**.

### Validation Methodology

- **80/20 train-test split** with stratification
- **10-fold stratified cross-validation** (maintains 12% cancer rate in every fold)
- **GridSearchCV** for hyperparameter optimization
- **Multi-metric evaluation:** Accuracy, Precision, Recall, F1-Score, AUC

---

## 4. 🧠 Model Interpretation & Feature Importance

**Top Predictive Features (Random Forest):**

| Rank | Feature | Importance | Clinical Validation |
|------|---------|-----------|---------------------|
| 1 | **PSA Levels** | ~70% | Primary screening biomarker (standard of care) |
| 2 | **DRE Results** | ~16% | Physical examination findings |
| 3 | **Smoking Status** | ~7% | Lifestyle risk factor |
| 4 | **Education** | ~3% | Socioeconomic factor |
| 5 | **Age** | ~2% | Risk increases with age |

**Clinical Validation:** All models agreed on feature hierarchy: **PSA >> DRE >> Smoking >> Demographics**

This validates current medical screening protocols - PSA and DRE tests contain most diagnostic information.

---

## 5. 📈 Clinical Impact & Business Value

### Performance Interpretation

**Confusion Matrix Results:**

Out of **100 patients with cancer:**
- **87 correctly identified** → proceed to biopsy → receive treatment ✅
- **13 missed** → require alternative screening or follow-up ⚠️

Out of **100 healthy patients:**
- **79 correctly classified** → avoid unnecessary biopsy ✅
- **21 false alarms** → undergo biopsy but found healthy ⚠️

**Risk-Benefit Analysis:**
- **Benefit:** 87% cancer detection saves lives through early intervention
- **Cost:** 21% false positive rate means some unnecessary biopsies
- **Verdict:** Clinically acceptable - missing cancer is far worse than extra biopsies

### Expected Clinical Impact

**Biopsy Reduction:**
- Current practice: Conservative approach → many borderline cases proceed to biopsy
- With model: **20-30% reduction** in unnecessary biopsies while maintaining 87% detection
- Fewer patients experience biopsy complications, anxiety, and costs

**Cost Savings:**
- Biopsy cost: $1,500-$3,000 per procedure
- If 100,000 unnecessary biopsies avoided annually → **$150-300 million saved**
- Does not include savings from reduced complications and follow-up care

### Proposed Clinical Workflow

1. **Patient Screening:** Collect demographics + PSA blood test + DRE physical exam
2. **Model Prediction:** Generate cancer risk score (0-100%)
3. **Risk Stratification:**
   - High Risk (>70%): Recommend biopsy
   - Medium Risk (30-70%): Enhanced monitoring, repeat PSA in 3-6 months
   - Low Risk (<30%): Standard annual screening
4. **Physician Decision:** Final decision incorporates model + clinical context + patient preferences

**Note:** Model serves as **decision support**, not replacement for medical judgment

---

## 6. 🚀 Future Enhancements & Research Extensions

**Model Enhancement:**
- External validation on independent hospital datasets
- Feature interaction analysis (PSA × Age, DRE × BMI)
- Temporal modeling incorporating PSA velocity (rate of change over time)
- Deep learning for complex non-linear patterns

**Clinical Deployment:**
- Real-time integration into Electronic Health Record (EHR) systems
- Prospective clinical trial validation
- Calibration analysis to ensure predicted probabilities match actual cancer rates

**Research Extension:**
- Multi-cancer prediction (extend to lung, colorectal, ovarian using PLCO dataset)
- Advanced imputation methods for missing clinical data
- Explainable AI techniques for physician trust

---

## 7. 🏆 Recognition & Key Findings

**Award:** Bronze Prize - Clark University School of Management 7th Annual Analytics Competition (April 2024)

**Key Learnings:**

1. **PSA and DRE are overwhelmingly the most important predictors** (86% combined importance), validating current medical screening protocols

2. **Random Forest with SMOTE achieved 87% recall**, exceeding the 80% clinical requirement while maintaining 82% accuracy

3. **Class imbalance requires domain-specific solutions** - SMOTE significantly improved Random Forest but not XGBoost

4. **Recall > Accuracy in healthcare** - XGBoost's 89% accuracy with 12% recall is clinically useless

5. **Physical exams still matter** - DRE (physician examination) ranked #2 in importance; AI augments but doesn't replace medical expertise
