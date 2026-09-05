// Data proyek portofolio gallery.
// Digunakan bersama oleh halaman daftar (gallery.astro) dan detail dinamis (gallery/[id].astro).

export const projects = [
  {
    id: 1,
    src: '/gambar/1.jpg',
    title: 'Pizza Shop Analysis',
    desc: 'The objective is to determine whether pizza diameters are normally distributed and to identify significant differences in pizza diameters between the two restaurants using the Shapiro Test, etc',
    detail: `
      <h4>Project Overview</h4>
      <p>This case study was conducted for a pizza company with two locations (Making Unit 1 & Making Unit 2) in the city of Bandung. The objective was to ensure product quality consistency through an inferential statistical approach: to verify whether the pizza diameters follow a normal distribution, and then to test whether there is a significant difference between the pizza diameters at the two locations as part of quality control.</p>

      <hr />

      <h4>1. Case Study I:  Test of Normality for Pizza Diameter</h4>
      <p>A pizza shop wants to determine whether the diameters of the pizzas it produces are normally distributed. The test was conducted using the <code>Shapiro-Wilk Test</code> with a significance level (alpha) of 0.05, where H0 states that the data are normally distributed.</p>

      <div class="modal-img-box">
        <img src="/gambar/gerai-pizza-shapiro-tunggal.png" alt="Results of the Shapiro Test for Pizza Diameter" />
        <p class="caption">Figure 1: Results of the Shapiro Test on Pizza Diameter Data</p>
      </div>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>A p-value of 0.52 was obtained, well above the alpha level of 0.05.</li>
        <li>H0 could not be rejected, meaning that the pizza diameter data are normally distributed.</li>
        <li>These results serve as the basis for determining the appropriate follow-up (parametric) test to be used in the next case study.</li>
      </ul>

      <hr />

      <h4>2. Case Study II Comparison of Pizza Diameters at Two Outlets</h4>
      <p>A company wants to determine whether there is a significant difference in pizza diameter between its two outlets in Bandung. The analysis was conducted in stages: a normality test for both data sets, a test for equality of variances (<code>Levene's Test</code>), and then a test for the difference in means (<code>Independent Two-Sample t-Test</code>).</p>

      <p><strong>Step I Test for Normality of the Two Groups:</strong></p>
      <div class="modal-img-box">
        <img src="/gambar/gerai-pizza-normalitas-dua-gerai.png" alt="Normality Test for Making Units 1 and 2" />
        <p class="caption">Figure 2: Shapiro Test on Making Unit 1 & Making Unit 2</p>
      </div>
      <ul>
        <li>Making Unit 1: p-value 0.32 (> 0.05) → the data are normally distributed.</li>
        <li>Making Unit 2: p-value 0.52 (> 0.05) → the data are normally distributed.</li>
      </ul>

      <p><strong>Step II Test for Equality of Variances (Levene's Test):</strong></p>
      <div class="modal-img-box">
        <img src="/gambar/gerai-pizza-levene-varians.png" alt="Results of the Levene Test of Variances" />
        <p class="caption">Figure 3: Results of Levene's Test for Equality of Variances Between the Two Outlets</p>
      </div>
      <ul>
      <li>p-value = 1.0 (> 0.05) → the variances of the two outlets are relatively similar, so there is no indication of a significant difference in terms of data distribution.</li>
      </ul>

      <p><strong>Step III Two-Sample t-Test (Equal Variances):</strong></p>
      <div class="modal-img-box">
        <img src="/gambar/gerai-pizza-ttest-2sample.png" alt="Hasil Uji t 2 Sampel" />
        <p class="caption">Figure 4: Results of the Independent Two-Sample t-Test</p>
      </div>
      <ul>
        <li>Since the data are normally distributed and have homogeneous variances, an independent t-test was used with the assumption <code>equal_var=True</code>.</li>
      <li>p-value = 1.0 (> 0.05) → H0 cannot be rejected.</li>
      </ul>

      <hr />

      <h4>Final Results</h4>
      <ul>
        <li>The pizza diameters in both groups were found to be normally distributed, validating the use of parametric tests.</li>
        <li>No significant difference was found in pizza diameter between Outlet A and Outlet B, indicating good production consistency at both locations.</li>
        <li>These results provide a recommendation to the operations team that pizza size standards are consistent across outlets and do not require further intervention in the production process.</li>
      </ul>
    `,
    tools: ['Python', 'SciPy', 'Pandas', 'Inferential Statistics', 'Jupyter Notebook'],
  },
  {
    id: 5,
    src: '/gambar/Prime video logo.jpg',
    title: 'Amazon Prime Video Content Dashboard',
    desc: 'An interactive dashboard was built using Microsoft Power BI to analyze and visualize the Amazon Prime Video content catalog (1929-2021), with key insights showing that the 13+ raring and the Drama genre are the largest categories',
    detail: `
      <h4>Project Overview</h4>
      <p>This project aims to analyze and visualize a dataset of Amazon Prime Video content spanning from 1920 to 2021. This interactive dashboard helps users understand content distribution, genre preferences, and audience rating segmentation to support data driven strategic decision making.</p>

      <div class="modal-img-box">
        <img src="/gambar/dashboard2.jpg" alt="Amazon Prime Video Content Dashboard" />
        <p class="caption">Figure 1: Amazon Prime Video Content Analysis Dashboard in Power BI</p>
      </div>

      <hr />

      <h4>1. Content Inventory & Ratings Distribution</h4>
      <p>The card visuals at the top of the dashboard summarize the overall scale of the catalog, while the "Ratings by Total Shows" bar chart classifies content based on audience segmentation.</p>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>The total inventory includes 9,655 titles, 5,771 directors, and 519 different genres, with data spanning from 1920 to 2021.</li>
        <li>The <strong>13+</strong> rating is the largest category with more than 2,100 titles, followed by the 16+ (1,500) and ALL (1,300) ratings, indicating that the catalog is dominated by content for teenage audiences and older.</li>
      </ul>

      <hr />

      <h4>2. Genre Trends</h4>
      <p>The "Genres by Total Shows" bar chart identifies the most frequently produced genres on the platform</p>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>Drama was the most dominant genre with 986 titles, far ahead of Comedy in second place (536 titles).</li>
        <li>Genre combinations such as “Drama, Suspense” (399) and “Comedy, Drama” (377) were also quite popular, indicating a trend toward cross-genre content on streaming platforms.</li>
      </ul>

      <hr />

      <h4>3. Content Type Split & Historical Timeline</h4>
      <p>The "Movies and TV Shows" donut chart compares the proportions of movies versus TV shows, while the "Total Shows by Release Year" area chart tracks the year over year growth in content volume.</p>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>Movies account for 80.82% of the catalog (7,810 titles), while TV shows account for only 19.18% (1,850 titles).</li>
        <li>Content volume remained relatively flat from 1920 until around 2000, then rose sharply in the post-2000 period—reflecting the boom in streaming industry production over the last two decades.</li>
      </ul>

      <hr />

      <h4>Data Preparation & Analysis</h4>
      <ul>
        <li><strong>Data Cleaning:</strong> Cleaning data in the “Director” and “Genre” columns, which contain duplicate values (multi-valued fields).</li>
        <li><strong>Exploratory Data Analysis (EDA):</strong> Analyzing the relationship between release year and the growth in the number of titles to identify trends in the streaming industry.</li>
        <li><strong>Dashboard Design:</strong> Implementing UI/UX design principles using Amazon Prime's signature dark mode theme to improve data readability.</li>
      </ul>

      <hr />

      <h4>Final Results</h4>
      <ul>
        <li>The dashboard successfully consolidates more than 9,600 content titles into a single view that is easy to explore through card visuals, bar charts, donut charts, area charts, and interactive slicers.</li>
        <li>The 13+ rating insight and the dominance of the Drama genre can serve as a reference for future content curation and license acquisition strategies.</li>
        <li>The surge in content volume after 2000 provides important historical context for the business team in understanding the shift in the scale of production within the streaming industry.</li>
      </ul>
    `,
    tools: ['Power BI', 'DAX', 'Data Cleaning', 'Data Visualization', 'UI/UX Design'],
  },
  {
    id: 3,
    src: '/gambar/t3.jpg',
    title: 'Sales Performance Dashboard',
    desc: 'An interactive dashboard built using Microsoft Excel (PivotTable and VBA macros) that highlights annual sales trends, with one of the key insights being that sales peak in November.',
    detail: `
      <h4>Project Overview</h4>
      <p>This interactive dashboard was built using Microsoft Excel to comprehensively monitor sales performance from 2014 to 2017: monthly trends, distribution by region, product category, and customer segment. The dashboard utilizes <code>PivotTable</code> & <code>PivotCharts</code> as its data aggregation engine, combined with <code>VBA macros</code> to create responsive year filter navigation buttons (All Data, 2014, 2015, 2016, 2017), so that all charts and KPI cards automatically update in real time as the user switches filters.</p>

      <div class="modal-img-box">
        <img src="/gambar/3.jpg" alt="Sales Analysis Dashboard" />
        <p class="caption">Figure 1: Interactive Sales Analysis Dashboard View</p>
      </div>

      <hr />

      <h4>1. Interactive Filtering with VBA Macros</h4>
      <p>The year navigation buttons (All Data / 2014 / 2015 / 2016 / 2017) in the upper-left corner of the dashboard were created using <code>VBA macros</code> linked to a PivotTable, allowing users to change the analysis period with a single click without having to apply manual filters. A “Copy Chart” button was also added to simplify the process of exporting the chart to other reports.</p>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>Button-based navigation speeds up the data exploration process compared to Excel's standard dropdown filters.</li>
        <li>All KPI cards, line charts, and donut charts are linked to a single PivotTable source, ensuring consistency when filtered.</li>
      </ul>

      <hr />

      <h4>2. Monthly Sales Trends</h4>
      <p>The “Monthly Sales Volume” line chart displays the trend in the volume of units sold from January through December using the <code>PivotChart</code> aggregation.</p>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>Sales volume tended to remain stable in the range of 460–610 units from February through August, before surging sharply starting in September (1,000 units).</li>
        <li>The highest figure was recorded in <strong>November with 1,219 units sold</strong>, followed by December (1,079 units) and September (1,000 units) indicating that the fourth quarter (Q4) is the peak of the shopping season.</li>
        <li>Total units sold throughout the year reached 7,581 units.</li>
      </ul>

      <hr />

      <h4>3. Distribution by Region and Product Category</h4>
      <p>Four KPI cards summarize the performance of each region (Central, East, South, West), accompanied by supporting pivot tables for product categories (Office Supplies, Furniture, Technology).</p>

      <p><strong>Key Insights:</strong></p>
      <ul>
      <li>The West Region recorded the highest number of units sold (415 units, 38%) with total sales of Rp341,366,146, followed by the East Region (289 units, 27%, Rp334,903,334), which actually contributed revenue equivalent to that of the West Region.</li>
      <li>The South Region was the smallest contributor, both in terms of units (132 units, 12%) and total sales (Rp120,081,493, 13%).</li>
      <li>By category, Furniture generated the highest revenue (Rp412,123,629), even though its unit volume (312 units) was lower than that of Office Supplies (573 units, Rp242,695,137), indicating that the average selling price per unit for Furniture was significantly higher.</li>
      </ul>

      <hr />

      <h4>4. Distribution by Customer Segment</h4>
      <p>The “Sales Volume by Segment” donut chart visualizes the proportions of three segments: Consumer, Home Office, and Corporate.</p>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>The Consumer segment dominated with 565 units sold and total sales of Rp502,349,387—more than half of all transactions.</li>
        <li>The Corporate segment contributed 373 units (Rp275,287,877), while the Home Office segment made the smallest contribution (141 units, Rp159,666,389).</li>
      </ul>

      <hr />

      <h4>Final Results</h4>
      <ul>
        <li>The dashboard successfully presents multidimensional sales insights (time, region, category, segment) in a single interactive view without the need to switch between sheets.</li>
        <li>The West region and the Consumer segment were identified as the main contributors to revenue, making them priorities for promotional strategies and inventory allocation.</li>
        <li>The sales surge in the final quarter of the year (September–November) provides a recommendation for the operations team to prepare inventory and logistics capacity earlier in anticipation of that period.</li>
      </ul>
    `,
    tools: ['Ms Excel', 'PivotTable', 'PivotChart', 'Macro VBA', 'Interactive Dashboard'],
  },
  {
    id: 4,
    src: '/gambar/4.jpg',
    title: 'Credit Card Prediction Model',
    desc: 'A machine learning classification model to predict the risk of credit card payment delinquency, with target accuracy and recall above 60%.',
    detail: `
      <h4>Project Overview</h4>
      <p>This project aims to mitigate credit risk at FinanKu by detecting potential credit card payment delinquencies as early as possible. This classification model helps the Risk Management team take preventive measures against high-risk customers, with performance targets of at least 60% for Accuracy and Recall.</p>
      
      <hr />
      
      <h4>1. Exploratory Data Analysis (EDA) & Demografi</h4>
      <p>An exploratory analysis was conducted on 7,561 customers in three major cities (Surabaya, Bandung, Jakarta) to examine demographic distribution and the correlation between age and delinquency status (unpaid tagging).</p>
      
      <div class="img-grid-2">
        <div class="modal-img-box">
          <img src="/gambar/finanku-eda-age-all.png" alt="Overall Age Distribution" />
          <p class="caption">Figure 1.1: Overall Distribution of Customers by Age</p>
        </div>
        <div class="modal-img-box">
          <img src="/gambar/finanku-eda-age-unpaid.png" alt="Age Distribution of Delinquencies" />
          <p class="caption">Figure 1.2: Distribution of Delinquent Customers by Age</p>
        </div>
      </div>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>The dataset is free of duplicate data (0 duplicates) and missing values (0 missing values).</li>
        <li>The working-age group dominates the customer base, but payment delinquency patterns correlate more strongly with the dynamics of balance changes between quarters than with nominal balances.</li>
        <li>The average annual balance for delinquent customers (Rp252.7 million) was higher than that for non-delinquent customers (Rp198.5 million).</li>
      </ul>

      <hr />

      <h4>2. Feature Engineering & Correlation Testing</h4>
      <p>Develop new time-horizon-based behavioral features (1 year and 6 months) to capture customers’ financial fluctuations, followed by an evaluation of the multicollinearity matrix.</p>
      
      <div class="modal-img-box" style="overflow-x: auto; text-align: left;">
        <table style="width: 100%; border-collapse: collapse; font-size: 1.3rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2); color: var(--main-color);">
              <th style="padding: 8px; text-align: left;">Feature Baru</th>
              <th style="padding: 8px; text-align: left;">Feature Description</th>
              <th style="padding: 8px; text-align: center;">Max |r|</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;"><code>Mean Balance</code></td>
              <td style="padding: 8px;">Average balance over the observation period</td>
              <td style="padding: 8px; text-align: center;">0.29</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;"><code>Delta Balance</code></td>
              <td style="padding: 8px;">Change in balance from the end of the quarter to the beginning of the period</td>
              <td style="padding: 8px; text-align: center;">0.28</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;"><code>Active Months</code></td>
              <td style="padding: 8px;">Total duration of customer active status (in months)</td>
              <td style="padding: 8px; text-align: center;">0.29</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;"><code>Diff PH</code></td>
              <td style="padding: 8px;">Fluctuations in the number of products held by customers</td>
              <td style="padding: 8px; text-align: center;">0.02</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><code>Vintage_CR</code></td>
              <td style="padding: 8px;">Estimated duration of credit card ownershipClick to apply</td>
              <td style="padding: 8px; text-align: center;">0.05</td>
            </tr>
          </tbody>
        </table>
        <p class="caption">Table 1: Evaluation of Multicollinearity Among New Features (All |r| < 0.7 are safe to use)</p>
      </div>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>All aggregated features exhibit low absolute correlation (|r| &lt; 0.30 between numerical predictors), demonstrating the absence of redundancy or multicollinearity in the data.</li>
        <li>Numerical data was standardized using <code>StandardScaler</code>, and categorical data was converted using <code>One-Hot Encoding</code>. The same transformation pipeline was consistently applied to the validation data.</li>
      </ul>

      <hr />

      <h4>3. Model Evaluation & Feature Importance</h4>
      <p>Classification modeling experiments using Logistic Regression, Random Forest, and XGBoost, tested on an independent validation dataset.</p>
      
      <div class="modal-img-box">
        <img src="/gambar/finanku-model-results.png" alt="Feature Importance Random Forest Model" />
        <p class="caption">Gambar 3: Feature Importance (Mean Score Decrease) in the Random Forest Model </p>
      </div>

      <p><strong>Final Results:</strong></p>
      <ul>
        <li>Business performance targets were met, with Accuracy and Recall scores above 60%.</li>
        <li><strong>Top Predictors:</strong> <code>Mean Balance</code> (average balance) and <code>Age</code> were the most dominant features with the highest importance scores (>0.35), followed closely by <code>Delta Balance</code> and <code>Avg. Annual Income/Month</code>.</li>
        <li>Financial behavior and core demographic metrics (age) showed significantly higher predictive power compared to geographic branch and city locations.</li>
      </ul>
    `,
    tools: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Seaborn'],
  },
  {
    id: 6,
    src: '/gambar/6.jpg',
    title: 'UNSRAT Climate AI',
    desc: 'The final project for the Machine Learning class is a real-time weather forecasting system for UNSRAT campus activities, featuring an automated ETL pipeline via n8n and an interactive prediction dashboard built with streamlit.',
    detail: `
      <h4>Project Overview</h4>
      <p>UNSRAT Climate AI is a machine learning based micro campus weather forecasting system for the UNSRAT Bahu campus area. This project is designed to predict temperature and rainfall up to 6 hours in advance, monitor conditions in real time, and provide user-friendly recommendations such as when to bring an umbrella.</p>

      <hr />

      <h4>1. Automated ETL Pipeline (n8n)</h4>
      <p>Real time weather data is retrieved from the BMKG API every hour using an automated workflow based on <code>n8n</code>, consisting of a Schedule Trigger → HTTP Request → Append row to Google Sheets as a repository for raw data.</p>

      <div class="modal-img-box">
        <img src="/gambar/unsrat-climate-n8n-etl-pipeline.png" alt="Workflow ETL n8n" />
        <p class="caption">Figure 1: Automated ETL Workflow Diagram via n8n (Schedule Trigger → HTTP Request → Google Sheets)</p>
      </div>

      <p><strong>Engineering Highlights:</strong></p>
      <ul>
        <li>The pipeline runs automatically every hour without manual intervention, ensuring that data is always up-to-date for real-time forecasting needs.</li>
        <li>The low-code approach with n8n speeds up the API integration process without the need for a dedicated backend server for scheduling.</li>
      </ul>

      <hr />

      <h4>2. Machine Learning Engine (Python – XGBoost)</h4>
      <p>The end-to-end notebook was developed starting with Business Understanding, Data Understanding (EDA of Manado weather data), Data Preparation, through Modeling and Evaluation. The <strong>Direct Multi-Step Forecasting</strong> approach was used with separate models for the T+1, T+3, and T+6-hour horizons. For more details, see here: <a href="https://colab.research.google.com/drive/1OTIf_0mAzNw9LBBSqSGjRLgLrmaAbi8s?usp=sharing">End-to-End Notebook</a> </p>

      <p><strong>Modeling Approach:</strong></p>
      <ul>
        <li>Temperature is predicted using <code>XGBRegressor</code>, while rainfall is predicted using <code>XGBClassifier</code> with a custom threshold (>5mm) to detect potential heavy rain—this hybrid regressor + classifier strategy was chosen because the two targets have different distribution characteristics.</li>
        <li>Hyperparameter tuning was performed using <code>RandomizedSearchCV</code> for both model types to optimize performance across each prediction horizon.</li>
      </ul>

      <p><strong>Evaluation Results</strong> (hold-out Januari 2025–sekarang):</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 1.3rem;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(255,255,255,0.2); color: var(--main-color);">
            <th style="padding: 8px; text-align: left;">Horizon</th>
            <th style="padding: 8px; text-align: center;">MAE Temperature (°C)</th>
            <th style="padding: 8px; text-align: center;">Rain Accuracy</th>
            <th style="padding: 8px; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px;">T+1</td>
            <td style="padding: 8px; text-align: center;">0.36</td>
            <td style="padding: 8px; text-align: center;">83%</td>
            <td style="padding: 8px; text-align: center;">✔ Very Precise</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px;">T+3</td>
            <td style="padding: 8px; text-align: center;">0.59</td>
            <td style="padding: 8px; text-align: center;">74%</td>
            <td style="padding: 8px; text-align: center;">✔ Reliable</td>
          </tr>
          <tr>
            <td style="padding: 8px;">T+6</td>
            <td style="padding: 8px; text-align: center;">0.71</td>
            <td style="padding: 8px; text-align: center;">72%</td>
            <td style="padding: 8px; text-align: center;">✔ Sufficient</td>
          </tr>
        </tbody>
      </table>
      <p class="caption">Table 1: Model Performance Across Each Forecast Horizon</p>

      <hr />

      <h4>3. Deployment Layer (Streamlit App)</h4>
      <p>The trained model is deployed to an interactive dashboard based on <code>Streamlit</code>, allowing users to set current condition parameters and select the forecast horizon (1, 3, or 6 hours ahead) directly.</p>

      <div class="modal-img-box">
        <img src="/gambar/unsrat-climate-streamlit-ui.png" alt="Dashboard Streamlit UNSRAT Climate AI" />
        <p class="caption">Figure 2: Interactive Weather Forecast Dashboad (Streamlit)</p>
      </div>

      <p><strong>Key Features:</strong></p>
      <ul>
        <li>🔁 Automated ETL via n8n</li>
        <li>📊 Multi-horizon weather forecast (temperature & precipitation)</li>
        <li>📱 Streamlit Interactive Dashboard</li>
        <li>🎯 Recommendations for automated actions based on prediction results</li>
        <li>🌙 Dark Mode</li>
      </ul>

      <hr />

      <h4>My Contribution</h4>
      <ul>
        <li><strong>ETL & Data Engineering:</strong> Design and build an n8n pipeline to retrieve BMKG data hourly, clean the data, correct anomalies, and prepare the final dataset.</li>
        <li><strong>Machine Learning (End-to-End Notebook):</strong> Creating a comprehensive notebook covering Business Understanding, Data Understanding (EDA), Data Preparation (handling missing values, feature engineering, time features), Modeling (multi-step XGBRegressor & XGBClassifier), Hyperparameter Tuning, Evaluation, and model export for deployment.</li>
        <li><strong>Deployment & UI Improvement:</strong> Helped refine the Streamlit interface, added dark mode and UX enhancements, and created a notification feature for action recommendations.</li>
      </ul>

      <hr />

      <h4>Final Results</h4>
      <ul>
        <li>The system successfully provides hyper-local weather forecasts tailored to the daily needs of the UNSRAT campus community, complete with an automated end-to-end data pipeline (ETL → ML → Deployment).</li>
        <li>The temperature regression model maintains high accuracy (MAE < 0.71°C) up to a 6-hour forecast horizon, while the rainfall classification model remains reliable (≥72% accuracy) across the entire forecast horizon.</li>
        <li>The combination of automated forecasts and actionable recommendations makes this system practical to use without technical expertise, making it well-suited to support daily activities on campus.</li>
      </ul>
    `,
    tools: ['Python', 'XGBoost', 'Scikit-learn', 'n8n', 'Streamlit', 'Pandas', 'Seaborn'],
  },
  {
    id: 7,
    src: '/gambar/7.jpg',
    title: 'Mithril Miner: PLTPs Site Exploration',
    desc: 'A data mining-based classification model for identifying strategic locations for Tidal Power Plants (PLTPs) in North Sulawesi, as the Delegation for the Preliminary Round of GEMASTIK XVIII 2025.',
    detail: `
      <h4>Project Overview</h4>
      <p>Indonesia has set a target of 23% renewable energy in its energy mix by 2025 (RUEN), but as of 2023, the actual share has only reached about 12.5%. Tidal energy is one of the most promising options due to its predictable nature, zero emissions, and suitability for coastal areas—yet its utilization in Indonesia remains limited due to a lack of integration of spatial and oceanographic data in technical planning. CND Mithril Miner developed a spatial classification model based on data mining and machine learning to identify strategic locations for the construction of Tidal Power Plants (PLTPs) in the coastal areas of North Sulawesi, as a contribution toward national energy sovereignty. This project successfully became <strong>a delegate to the preliminary round of the GEMASTIK XVIII 2025 National Data Mining Competition.</strong>.</p>

      <hr />

      <h4>Technical Methodology & Datasets</h4>
      <p>The model was developed following the five-phase <code>CRISP-DM</code> framework (Business Understanding → Data Understanding → Data Preparation → Modeling → Evaluation). Four data sources were integrated as predictors.</p>

      <div class="modal-img-box" style="overflow-x: auto; text-align: left;">
        <table style="width: 100%; border-collapse: collapse; font-size: 1.3rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2); color: var(--main-color);">
              <th style="padding: 8px; text-align: left;">Data</th>
              <th style="padding: 8px; text-align: left;">Source</th>
              <th style="padding: 8px; text-align: left;">Key Variables</th>
              <th style="padding: 8px; text-align: left;">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Tidal Current Speed</td>
              <td style="padding: 8px;">Copernicus Marine Service (hourly, per grid Sulawesi Utara)</td>
              <td style="padding: 8px;"><code>utide</code>, <code>vtide</code></td>
              <td style="padding: 8px;">Key Predictors of Energy Potential</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Batimetri</td>
              <td style="padding: 8px;">BIG — National Bathymetric Map (Batnas)</td>
              <td style="padding: 8px;"><code>depth</code></td>
              <td style="padding: 8px;">Predictors of Technical Constraints</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Tidal Range</td>
              <td style="padding: 8px;">BMKG (Bitung, Likupang, and Manado stations)</td>
              <td style="padding: 8px;"><code>EST</code></td>
              <td style="padding: 8px;">Supporting Predictors & Validation</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Distance to the Substation</td>
              <td style="padding: 8px;">Manually processed via Google Earth</td>
              <td style="padding: 8px;"><code>Lat_G</code>, <code>Long_G</code></td>
              <td style="padding: 8px;">Predictors of Economic Constraints</td>
            </tr>
          </tbody>
        </table>
        <p class="caption">Table 1: Dataset and the Role of Each Variable in the Model</p>
      </div>

      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>The model integrates technical aspects (current velocity, depth) and economic aspects (distance to the grid) into a single, unified spatial framework; this approach is one of the key distinctions from previous studies, which generally focused on only one aspect.</li>
      </ul>

      <hr />

      <h4>Exploratory Data Analysis (EDA)</h4>
      <h4>1. Data Understanding </h4>
      <p><strong>Key Insights:</strong></p>
      <ul>
        <li>A total of 1,223,109 missing values were identified in the current components (utide, vtide) of the Copernicus data; these were handled using the zero-imputation method based on the technical assumption that the current is zero at those points.</li>
        <li>Duplicate data were found in the Likupang observation dataset (3,807 rows) and the Likupang tide data (81 rows); both were removed to maintain statistical validity.</li>
        <li>Box plot analysis revealed extreme values in the tidal range; based on domain verification, these values were retained because they represent a real physical phenomenon (spring tides), not data anomalies.</li>
        <li>The tidal pattern at the study site (Bitung Station) was confirmed to be of the <em>Mixed, Prevailing Semidiurnal</em> type, characterized by two high tides and two low tides per day with varying heights.</li>
        <li>The bathymetric distribution map confirms that all locations meeting the technical depth criteria are concentrated in the coastal zone (not in deep waters >2,000 m), so further analysis is focused on this shallow zone.</li>
      </ul>

      <hr />

      <h4>2. Data Preparation & Feature Engineering</h4>
      <p><strong>Key Insights:</strong></p>
      <ul>
        <li><strong>Raster-to-Tabular Conversion:</strong> Bathymetric (.tif) and Copernicus (.nc) data were extracted into a tabular format using <code>rasterio</code> and <code>xarray</code>.</li>
        <li><strong>Magnitude Vector:</strong> The <code>max_tidal_speed</code> feature is derived from the magnitude vectors of the u and v components to obtain the peak velocity at each grid point.</li>
        <li><strong>Spatial Merging:</strong> Data integration was performed using the Nearest Neighbor Join technique based on <code>geopandas</code>, appending the attributes depth, mean_tidal_range, and distance_to_grid_km to each ocean grid point after projection into the UTM coordinate system.</li>
        <li><strong>Target Labeling (Energy Score):</strong> The energy score is calculated using the physics formula <code>P = ½ρAv³</code> (current velocity to the third power, multiplied by the average tidal range, divided by the distance to the grid as an economic penalty), then discretized into 3 balanced quantile classes: <em>Low, Medium, High</em> using <code>pandas.qcut</code>.</li>
      </ul>

      <hr />

      <h4>3. Modeling & Hyperparameter Tuning</h4>
      <p>Three classification algorithms were compared: Random Forest (RF), XGBoost (XGB), and Support Vector Machine (SVM). They were optimized using <code>GridSearchCV</code> with <code>5-fold cross-validation</code> on an 80:20 data split.</p>

      <div class="modal-img-box" style="overflow-x: auto; text-align: left;">
        <table style="width: 100%; border-collapse: collapse; font-size: 1.3rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2); color: var(--main-color);">
              <th style="padding: 8px; text-align: left;">Algoritm</th>
              <th style="padding: 8px; text-align: left;">Best Configuration</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Random Forest</td>
              <td style="padding: 8px;">n_estimators=200, max_depth=None, min_samples_split=2, min_samples_leaf=1</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">XGBoost</td>
              <td style="padding: 8px;">learning_rate=0.1, max_depth=6, n_estimators=200, subsample=0.8</td>
            </tr>
            <tr>
              <td style="padding: 8px;">SVM</td>
              <td style="padding: 8px;">C=10, kernel=rbf, gamma='scale' (dengan StandardScaler pipeline)</td>
            </tr>
          </tbody>
        </table>
        <p class="caption">Table 2: Optimal Configuration from GridSearchCV Results</p>
      </div>

      <hr />

      <h4>4. Evaluation & Interpretability</h4>
      <div class="modal-img-box" style="overflow-x: auto; text-align: left;">
        <table style="width: 100%; border-collapse: collapse; font-size: 1.3rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2); color: var(--main-color);">
              <th style="padding: 8px; text-align: left;">Method</th>
              <th style="padding: 8px; text-align: center;">Accuracy</th>
              <th style="padding: 8px; text-align: center;">Precision</th>
              <th style="padding: 8px; text-align: center;">Recall</th>
              <th style="padding: 8px; text-align: center;">F1-Score</th>
              <th style="padding: 8px; text-align: center;">Cohen's Kappa</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">RF</td>
              <td style="padding: 8px; text-align: center;">0.9707</td>
              <td style="padding: 8px; text-align: center;">0.9711</td>
              <td style="padding: 8px; text-align: center;">0.9707</td>
              <td style="padding: 8px; text-align: center;">0.9708</td>
              <td style="padding: 8px; text-align: center;">0.9561</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;"><strong>XGB</strong></td>
              <td style="padding: 8px; text-align: center;"><strong>0.9797</strong></td>
              <td style="padding: 8px; text-align: center;"><strong>0.9800</strong></td>
              <td style="padding: 8px; text-align: center;"><strong>0.9797</strong></td>
              <td style="padding: 8px; text-align: center;"><strong>0.9797</strong></td>
              <td style="padding: 8px; text-align: center;"><strong>0.9696</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px;">SVM</td>
              <td style="padding: 8px; text-align: center;">0.9257</td>
              <td style="padding: 8px; text-align: center;">0.9258</td>
              <td style="padding: 8px; text-align: center;">0.9257</td>
              <td style="padding: 8px; text-align: center;">0.9256</td>
              <td style="padding: 8px; text-align: center;">0.8885</td>
            </tr>
          </tbody>
        </table>
        <p class="caption">Table 3: Comparison of the Performance of the Three Models on the Test (Hold-out) Data</p>
      </div>

      <div class="modal-img-box">
        <img src="/gambar/mithril-miner-shap-xgboost.png" alt="SHAP Summary Plot XGBoost" />
        <p class="caption">Figure 2: SHAP Summary Plot — Model XGBoost (Model Terbaik)</p>
      </div>

      <p><strong>Key Insights:</strong></p>
      <ul>
      <li>XGBoost outperformed the other models across all metrics, with a Cohen's Kappa of 0.9696, indicating that the predictions align with the actual labels at the “almost perfect agreement” level.</li>
      <li>Analysis of <em>Permutation Feature Importance</em> (PFI) confirmed <code>max_tidal_speed</code> as the most dominant feature in all three models (RF 0.61, XGB 0.61, SVM 0.53), followed by <code>distance_to_grid_km</code>, <code>mean_tidal_range</code>, and <code>depth</code>.</li>
      <li>The <em>SHAP</em> analysis shows that high current speeds consistently classify locations as having “High” potential, in line with the physical principle that ocean current power is proportional to the cube of its speed.</li>
      <li>The <code>depth</code> feature has the lowest SHAP contribution in tree-based models but is quite significant in SVM, indicating that as long as the depth remains within a technically feasible range (25–50 m), its influence on classification is relatively small compared to the current velocity and distance to the grid factors.</li>
      </ul>

      <hr />

      <h4>Spatial Mapping</h4>
      <div class="modal-img-box">
        <img src="/gambar/peta_sebaran.png" alt="Peta Klasifikasi Potensi Kawasan PLTPs" />
        <p class="caption">Figure 1: Pemetaan Spasial Hasil Klasifikasi Potensi Kawasan Pembangunan PLTPs</p>
      </div>
      <p><strong>Key Insights:</strong></p>
      <ul>
      <li>Spatial mapping of the classification results shows a polarized pattern: high-potential areas are concentrated in the northeastern part of the Minahasa Peninsula, particularly in the waters of <strong>Bitung</strong> and <strong>Lembeh Strait</strong>, which feature narrow sea lanes with relatively fast currents.</li>
      <li><strong>Likupang</strong> was also identified as an additional priority zone, given its proximity to adequate electrical infrastructure.</li>
      <li>Areas with low potential are predominantly found in the open bays to the south and west, where currents tend to be slower.</li>
      </ul>

      <hr />

      <h4>My Contribution</h4>
      <ul>
        <li><strong>Exploratory Data Analysis (EDA):</strong> Conducted data quality analysis, handled over 1.2 million missing values, removed duplicates, detected outliers using box plots, and characterized tidal phenomena.</li>
        <li><strong>Data Preparation & Feature Engineering:</strong> Converting raster data to tabular format (.tif & .nc), calculating current velocity magnitude vectors, performing spatial merging using the Nearest Neighbor Join method, and designing a target labeling scheme (Energy Score) that combines technical and economic aspects.</li>
      </ul>

      <hr />

      <h4>Final Results</h4>
      <ul>
        <li>A high-performance spatial classification model was successfully developed (XGBoost: 97.97% accuracy, 96.96% Kappa Score), outperforming the other two comparison models (RF and SVM) across all evaluation metrics.</li>
        <li>Model interpretation using PFI and SHAP confirmed that maximum current velocity is the primary determinant of energy potential, supported by distance to the power grid, tidal range, and sea depth as contributing factors—this validation reinforces that the model is not only statistically accurate but also aligned with the principles of oceanographic physics.</li>
        <li>This project successfully qualified as a delegate for the GEMASTIK XVIII 2025 Preliminary Round, validating the feasibility of the CRISP-DM-based methodology at the national competition level, while also producing a map of recommended priority areas (see the Spatial Mapping section) that can be directly utilized by the government and investors in planning marine energy infrastructure.</li>
      </ul>
    `,
    tools: ['Python', 'XGBoost', 'Random Forest', 'SVM', 'Rasterio', 'Xarray', 'Geopandas', 'SHAP', 'CRISP-DM', 'Geospatial Analysis'],
  },
  {
    id: 8,
    src: '/gambar/8.jpg',
    title: 'Multimodal Emotion Classification from Social Media Videos',
    desc: 'An 8-class emotion classification model for social media videos (visual, audio, text) using the Late Fusion (stacking) approach successfully placed in the Top 20 out of approximately 300 teams in the preliminary round of SATRIA DATA 2025 – Big Data Challenge.',
    detail: `
      <h4>Project Overview</h4>
      <p>Emotions are a fundamental aspect of human interaction, expressed through language, vocal intonation, and facial expressions. In the digital age, these expressions are increasingly prevalent across various social media platforms (Facebook, Instagram, TikTok) in the form of text, audio, and video. Automated analysis of emotions in digital content holds strategic value for understanding public sentiment, supporting content recommendations, enabling automated moderation, and informing social research—yet accurately classifying emotions from multimedia data that integrates visuals, audio, and text simultaneously remains a major challenge in this field. </p>
      <p>This project developed a multimodal emotion classification system (8 classes: Proud, Confident, Happy, Surprised, Neutral, Sad, Afraid, Angry) from social media videos, created for the <strong>SATRIA DATA 2025 – Big Data Challenge</strong> competition. Our team made it into the <strong>Top 20 out of approximately 300 teams</strong> in the preliminary round. I served as the <strong>Team Leader & Machine Learning Engineer</strong>, with a primary focus on the design, modeling, and evaluation of multimodal fusion. The complete notebooks are available via the following Google Colab link: <a href="https://colab.research.google.com/drive/1dppdlValxpaC_G0RRmxYqSED7SYGSAGQ?usp=sharing" target="_blank">Classification Model Notebooks</a>, and the GitHub repository can be accessed via the following link: <a href= “https://github.com/natalio123/multimodal-emotions-classification.git” target="_blank">Multimodal GitHub Project</a></p>
      <p><em>Note: The linked notebook is a “clean code” version (a refactored version of the original competition code created for portfolio documentation purposes). Therefore, the scores in the “Results” table below are from a re-run of this clean code notebook, while the official Macro F1-Score submitted to the competition leaderboard (the final result of late fusion) is shown separately as the final submission score.</em></p>

      <hr />

      <h4>1. Problem & Dataset</h4>
      <p>Each video must be classified into one of eight emotional categories: <em>Proud</em> (a sense of pride in an achievement), <em>Trust</em> (self-confidence/belief), <em>Joy</em> (happiness/pleasure), <em>Surprise</em> (a feeling of the unexpected/shock), <em>Neutral</em> (objective with no clear emotion), <em>Sadness</em> (sadness/disappointment), <em>Fear</em> (worry/anxiety), and <em>Anger</em> (frustration/hatred).</p>
      <p>The dataset consists of videos approximately 5 minutes long from public social media accounts, with features extracted into CSV format:</p>
      <ul>
        <li><strong>Training data:</strong> 803 videos, with emotion labels.</li>
        <li><strong>Test data:</strong> 200 videos, unlabeled and to be predicted by participants.</li>
      </ul>
      <p>Model performance is evaluated using the <strong>Macro-averaged F1-Score</strong>, which assigns balanced weights to all emotion classes, including those that occur infrequently.</p>

      <hr />

      <h4>2. Modalities & Feature Alignment</h4>
      <p>The system integrates three modalities that are processed independently, then merged based on <code>id</code> the same video, and reduced to a set of the most informative features per modality.</p>

      <div class="modal-img-box" style="overflow-x: auto; text-align: left;">
        <table style="width: 100%; border-collapse: collapse; font-size: 1.3rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2); color: var(--main-color);">
              <th style="padding: 8px; text-align: left;">Modalitas</th>
              <th style="padding: 8px; text-align: left;">Description</th>
              <th style="padding: 8px; text-align: left;">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Visual</td>
              <td style="padding: 8px;">Frame-level statistics (brightness, motion, colourfulness, edge density, optical flow, temporal dynamics)</td>
              <td style="padding: 8px;">Emotion cues</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Audio</td>
              <td style="padding: 8px;">Engineered acoustic features (MFCC, chroma, mel-spectrogram, formant statistics)</td>
              <td style="padding: 8px;">Prosody & tone</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Teks</td>
              <td style="padding: 8px;">BERT embeddings from speech transcripts</td>
              <td style="padding: 8px;">Linguistic signals</td>
            </tr>
          </tbody>
        </table>
        <p class="caption">Table 1: Modalities and Their Respective Roles within the System</p>
      </div>

      <hr />

      <h4>3. Baseline — Early Fusion</h4>
      <p>As a baseline for comparison, all raw features from the three modalities were combined into a single matrix before training a single model. Three algorithms were compared on this combined matrix—<code>XGBoost</code>, <code>LightGBM</code>, and <code>Random Forest</code>—each tuned using <code>RandomizedSearchCV</code>, which was directly optimized for the macro F1-score. This baseline was used to validate whether the late fusion (stacking) design provides a meaningful performance improvement compared to simply combining the raw features directly.</p>

      <hr />

      <h4>4. Feature Fusion Strategy — Late Fusion (Stacking)</h4>
      <p>The final architecture uses the <strong>Late Fusion (stacking)</strong> approach: a base model is trained separately for each modality (visual, audio, text) using <code>XGBoost</code>. The class probabilities from the out-of-fold cross-validation of each base model are used as meta-features, ensuring no data leakage to the final fusion stage. A meta-model is then trained on the combined probabilities to generate the final prediction. The out-of-fold (OOF) stacking strategy via Stratified K-Fold cross-validation ensures that the resulting meta-features are free from data leakage.</p>

      <hr />

      <h4>5. Modeling & Training Strategy</h4>
      <p><strong>Model Configuration:</strong></p>
      <ul>
        <li>Base models (by modality): the <code>XGBoost</code> classifier is trained independently on visual, audio, and text features.</li>
        <li>Meta-model (fusion stage): <code>XGBoost</code>, trained on the out-of-fold probability outputs from the three base models.</li>
        <li>Early Fusion baseline comparison: <code>XGBoost</code>, <code>LightGBM</code>, and <code>Random Forest</code>, each tuned and compared on the combined feature set.</li>
        <li>Task: multi-class emotion classification, 8 classes.</li>
      </ul>

      <p><strong>Training Strategy:</strong></p>
      <ul>
        <li>A stratified train–validation split is performed before any resampling process, so that the validation data continues to represent the natural class distribution.</li>
        <li>Class imbalance is addressed using <code>ADASYN</code> (Adaptive Synthetic Sampling).</li>
        <li>Hyperparameter tuning using <code>RandomizedSearchCV</code>, optimized directly for the macro F1-score.</li>
        <li>Out-of-fold (OOF) stacking via stratified K-fold cross-validation to generate leakage-free meta-features for the fusion model.</li>
      </ul>

      <hr />

      <h4>Results (with numbers)</h4>
      <div class="modal-img-box" style="overflow-x: auto; text-align: left;">
        <table style="width: 100%; border-collapse: collapse; font-size: 1.3rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2); color: var(--main-color);">
              <th style="padding: 8px; text-align: left;">Approach</th>
              <th style="padding: 8px; text-align: center;">Macro F1-Score (Validation, notebook re-run results)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Early Fusion — XGBoost</td>
              <td style="padding: 8px; text-align: center;">0.145715</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Early Fusion — LightGBM</td>
              <td style="padding: 8px; text-align: center;">0.103641</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 8px;">Early Fusion — Random Forest</td>
              <td style="padding: 8px; text-align: center;">0.101069</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Late Fusion — Meta-Model</strong></td>
              <td style="padding: 8px; text-align: center;"><strong>0.1130</strong></td>
            </tr>
          </tbody>
        </table>
        <p class="caption">Table 2: Comparison of Macro F1-Scores on the Validation Data (results from re-running the “clean code” notebook)</p>
      </div>

      <div class="modal-img-box" style="text-align: center;">
        <p style="font-size: 1.5rem; margin: 0;"><strong>Macro F1-Score — Official Submission (Late Fusion)</strong></p>
        <p style="font-size: 2.2rem; font-weight: bold; color: var(--main-color); margin: 8px 0;">0.253941</p>
        <p class="caption">Final scores submitted to the SATRIA DATA 2025 – Big Data Challenge leaderboarde</p>
      </div>

      <ul>
        <li>The late fusion model (meta-model) was the final approach submitted to the competition, with a validation Macro F1-Score of <strong>0.1130</strong> and an official submission score of <strong>0.253941</strong> on the competition leaderboard.</li>
        <li>Based on these scores, the team successfully secured a <strong>Top 20 ranking out of ~300 teams</strong> in the preliminary round of the SATRIA DATA 2025 – Big Data Challenge.</li>
      </ul>

      <hr />

      <h4>My Contribution</h4>
      <p>As <strong>Team Leader & Machine Learning Engineer</strong>, my responsibilities include:</p>
      <ul>
        <li><strong>Multimodal System Design:</strong> Designing end-to-end multimodal learning pipelines and determining feature alignment and fusion strategies.</li>
        <li><strong>Modeling & Optimization:</strong> Implementing and experimenting with early fusion architectures, training and tuning models using classical ML and gradient boosting, and optimizing performance for class-imbalanced emotion categories.</li>
        <li><strong>Evaluation & Coordination:</strong> Leading model evaluation using the competition's official macro-averaged F1-score, as well as coordinating the team's workflow and ensuring compliance with competition rules.</li>
      </ul>
      <p>Feature extraction for each modality was performed collaboratively by the team, while my primary focus was on cross-modal integration and performance optimization.</p>

      <hr />

      <h4>Final Results</h4>
      <ul>
        <li>The team successfully secured a spot in the <strong>Top 20 out of ~300 teams</strong> in the preliminary round of SATRIA DATA 2025 – Big Data Challenge with a Macro F1-Score of <strong>0.253941</strong>, validating the effectiveness of the designed multimodal late fusion approach.</li>
        <li>The late fusion (stacking) design, utilizing out-of-fold probability-based meta-features, successfully integrated signals from three different modalities (visual, audio, text) without the risk of data leakage.</li>
        <li>The end-to-end pipeline—ranging from multimodal feature alignment, class imbalance handling (ADASYN), hyperparameter tuning, to OOF-based stacking—is structured modularly, making it easy to replicate for similar multimodal data science competitions in the future.</li>
      </ul>
    `,
    tools: ['Python', 'XGBoost', 'LightGBM', 'Random Forest', 'ADASYN', 'BERT', 'Scikit-learn', 'Google Colab'],
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === Number(id));
}