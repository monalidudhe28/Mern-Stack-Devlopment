import logo from './logo.svg';
import './App.css';

function App() {
 <body>
    <div class="dashboard-container">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h2>FinanceFX</h2>
                <span class="user-badge">Freelancer Pro</span>
            </div>
            <nav class="sidebar-menu">
                <button class="menu-item active" data-target="overview"><i class="fas fa-chart-pie"></i> Overview</button>
                <button class="menu-item" data-target="transactions"><i class="fas fa-exchange-alt"></i> Transactions</button>
                <button class="menu-item" data-target="budgets"><i class="fas fa-wallet"></i> Budgets</button>
                <button class="menu-item" data-target="reports"><i class="fas fa-file-invoice-dollar"></i> Reports</button>
            </nav>
        </aside>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Top Bar -->
            <header class="top-bar">
                <h1 id="page-title">Overview</h1>
                <div class="action-buttons">
                    <button id="open-transaction-modal" class="btn btn-primary"><i class="fas fa-plus"></i> Add Transaction</button>
                    <button id="open-budget-modal" class="btn btn-secondary"><i class="fas fa-sliders-h"></i> Set Budgets</button>
                </div>
            </header>

            <!-- Dynamic View Wrapper -->
            <div id="dashboard-views">
                
                <!-- 1. OVERVIEW VIEW -->
                <section id="view-overview" class="dashboard-view active">
                    <!-- Metrics Cards Grid -->
                    <div class="metrics-grid">
                        <div class="card metric-card income">
                            <div class="card-icon"><i class="fas fa-arrow-down"></i></div>
                            <div class="card-data">
                                <h3>Total Income</h3>
                                <p id="metric-income">₹0.00</p>
                            </div>
                        </div>
                        <div class="card metric-card expenses">
                            <div class="card-icon"><i class="fas fa-arrow-up"></i></div>
                            <div class="card-data">
                                <h3>Total Expenses</h3>
                                <p id="metric-expenses">₹0.00</p>
                            </div>
                        </div>
                        <div class="card metric-card savings">
                            <div class="card-icon"><i class="fas fa-piggy-bank"></i></div>
                            <div class="card-data">
                                <h3>Net Savings</h3>
                                <p id="metric-savings">₹0.00</p>
                            </div>
                        </div>
                    </div>

                    <!-- Charts Section -->
                    <div class="charts-grid">
                        <div class="card chart-card">
                            <h3>Financial Trends (Monthly)</h3>
                            <div class="chart-container">
                                <canvas id="trendChart"></canvas>
                            </div>
                        </div>
                        <div class="card chart-card">
                            <h3>Expense Categories</h3>
                            <div class="chart-container">
                                <canvas id="categoryChart"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- Budget Progress Quick View -->
                    <div class="card budget-summary-card">
                        <h3>Active Budget Limits</h3>
                        <div id="overview-budget-list" class="budget-progress-container">
                            <!-- Injected dynamically via JS -->
                        </div>
                    </div>
                </section>

                <!-- 2. TRANSACTIONS VIEW -->
                <section id="view-transactions" class="dashboard-view">
                    <div class="card table-card">
                        <!-- Filters Header -->
                        <div class="table-filters">
                            <div class="search-box">
                                <i class="fas fa-search"></i>
                                <input type="text" id="search-input" placeholder="Search transactions...">
                            </div>
                            <div class="filter-group">
                                <select id="filter-type">
                                    <option value="all">All Types</option>
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>
                                <select id="filter-category">
                                    <option value="all">All Categories</option>
                                    <!-- Injected dynamically via JS -->
                                </select>
                            </div>
                        </div>

                        <!-- Data Table -->
                        <div class="table-responsive">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="transaction-table-body">
                                    <!-- Injected dynamically via JS -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <!-- 3. BUDGETS VIEW -->
                <section id="view-budgets" class="dashboard-view">
                    <div class="grid-two-columns">
                        <!-- Category Budget Status Cards -->
                        <div class="card">
                            <h3>Category Budgets Status</h3>
                            <div id="detailed-budget-list" class="budget-detailed-container">
                                <!-- Injected dynamically via JS -->
                            </div>
                        </div>
                        
                        <!-- Budget Insights -->
                        <div class="card insight-card">
                            <h3>Budget Advisor</h3>
                            <div id="budget-alerts" class="alert-container">
                                <!-- Warning messages if category exceeds limit -->
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 4. REPORTS VIEW -->
                <section id="view-reports" class="dashboard-view">
                    <div class="card report-control-card">
                        <h3>Generate Monthly Financial Report</h3>
                        <div class="report-controls">
                            <input type="month" id="report-month-picker">
                            <button id="btn-generate-report" class="btn btn-primary"><i class="fas fa-sync"></i> Compile Report</button>
                            <button id="btn-print-report" class="btn btn-secondary"><i class="fas fa-print"></i> Export / Print</button>
                        </div>
                    </div>

                    <!-- Printable Report Document Container -->
                    <div id="printable-report-area" class="card report-document hidden">
                        <div class="report-header">
                            <h2>Monthly Statement</h2>
                            <h4 id="report-date-label">Month Year</h4>
                        </div>
                        <hr>
                        <div class="report-summary-metrics">
                            <div class="rep-metric">
                                <span>Total Revenue:</span>
                                <strong id="rep-income">₹0.00</strong>
                            </div>
                            <div class="rep-metric">
                                <span>Total Expenditure:</span>
                                <strong id="rep-expense">₹0.00</strong>
                            </div>
                            <div class="rep-metric">
                                <span>Net Surplus/Deficit:</span>
                                <strong id="rep-savings">₹0.00</strong>
                            </div>
                        </div>
                        <div class="report-breakdown">
                            <h3>Breakdown by Category</h3>
                            <ul id="report-breakdown-list">
                                <!-- Injected dynamically via JS -->
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    </div>

    <!-- TRANSACTION MODAL -->
    <div id="transaction-modal" class="modal-overlay hidden">
        <div class="modal-box">
            <div class="modal-header">
                <h3 id="modal-tx-title">Add Transaction</h3>
                <button class="close-modal" id="close-tx-modal">&times;</button>
            </div>
            <form id="transaction-form" class="modal-form">
                <input type="hidden" id="tx-id">
                
                <div class="form-group">

export default App;
