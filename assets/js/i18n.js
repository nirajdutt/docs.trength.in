/**
 * Trength Suite Documentation - Multilingual Support (English & Hindi)
 * Instant client-side switching with localStorage persistence
 */

const TrengthI18n = {
    currentLang: 'en',
    translations: {
        en: {
            // Header & Navigation
            doc_title: "Trengthâ„¢ Suite | Retail ERP & POS Documentation",
            nav_getting_started: "Getting Started",
            nav_overview: "Overview",
            nav_installation: "Installation",
            nav_command_centre: "Command Centre",
            nav_configurations: "Configurations",
            nav_troubleshoot: "Troubleshoot",
            nav_video_tutorials: "Video Tutorials",
            nav_jewellery_app: "Jewellery Application",
            nav_management: "Management",
            nav_users: "Users",
            nav_roles: "Roles",
            nav_masters: "Masters",
            nav_shop: "Shop",
            nav_products: "Products",

            // Sidebar Masters & Shop Links
            nav_metals: "Metals",
            nav_metal_colors: "Metal Colors",
            nav_metal_purity: "Metal Purity",
            nav_metal_rates: "Metal Rates",
            nav_stones: "Stones",
            nav_stone_clarity: "Stone Clarity",
            nav_stone_color: "Stone Color",
            nav_stone_cut: "Stone Cut",
            nav_uoms: "U.O.Ms",
            nav_brands: "Brands",
            nav_cities: "Cities",
            nav_jewellery_types: "Jewellery Types",
            nav_reasons: "Reasons",
            nav_setting_types: "Setting Types",
            nav_gst_rates: "GST Rates",
            nav_stores: "Stores",
            nav_counters: "Counters",
            nav_customers: "Customers",
            nav_jewellers: "Jewellers",
            nav_suppliers: "Suppliers",
            nav_product_categories: "Product Categories",
            nav_product_metals: "Product Metals",
            nav_product_stones: "Product Stones",
            nav_product_types: "Product Types",

            // Hero Section
            hero_badge_platform: "ENTERPRISE RETAIL PLATFORM",
            hero_badge_suite: "MODULAR POS & ERP SUITE",
            hero_heading: "Empower Your Retail Enterprise with <span class=\"text-primary position-relative d-inline-block\">Trengthâ„¢ Suite</span>",
            hero_subtitle: "A high-speed, enterprise-grade retail POS and inventory management platform engineered for modern commercial operations. Trength provides specialized, domain-tailored software applications for <strong>Jewellery Showrooms</strong>, <strong>Mobile & Telecom Outlets</strong>, <strong>Clothing & Fashion Chains</strong>, and <strong>Consumer Electronics Retailers</strong>.",
            hero_btn_install: "<i class=\"bi bi-box-arrow-in-down me-1\"></i>Quick Installation Guide",
            hero_btn_command: "<i class=\"bi bi-sliders me-1\"></i>Command Centre Setup",
            hero_btn_diagnostics: "<i class=\"bi bi-wrench me-1\"></i>System Diagnostics",
            hero_arch_title: "100% Offline Local Store Network",
            hero_arch_desc: "Zero internet required. Single host PC connected to an offline Wi-Fi router; mobile sales reps scan QR tags and sync instantly with attached receipt & QR label printers.",
            hero_badge_airgap: "AIR-GAPPED READY",

            // Section 1: Why Choose Trength Suite
            sec1_title: "Why Choose Trengthâ„¢ Suite?",
            sec1_subtitle: "Engineered for retail owners who demand speed, zero hardware bloat, and total data sovereignty",

            // Support Notice & Footer
            support_title: "Enterprise Onboarding & Technical Assistance:",
            support_desc: "Need assistance setting up your store network or configuring multi-counter tablet billing? Contact our engineering team at <a href=\"mailto:support@trength.in\" class=\"fw-bold\">support@trength.in</a> or visit <a href=\"https://trength.in\" target=\"_blank\" class=\"fw-bold\">https://trength.in</a>.",

            // Visual Installation Guide Steps
            inst_heading: "Step-by-Step Visual Installation Guide",
            inst_subheading: "Follow these 5 visual setup screens to install Trength Server POS & API Host on your billing PC.",
            
            inst_step1_badge: "STEP 1: WELCOME WIZARD",
            inst_step1_title: "Launch Trengthâ„¢ Suite Setup Wizard",
            inst_step1_desc: "Run the downloaded <code>TrengthSuite-Setup.msi</code> installer on your Windows billing PC. When the <strong>Welcome to the Trengthâ„¢ Suite Setup Wizard</strong> screen appears, click <strong>Next &gt;</strong> to begin installation.",
            inst_step1_callout: "<strong>Pro Tip:</strong> Ensure you are logged into a Windows Local Administrator account before running the installer.",

            inst_step2_badge: "STEP 2: FOLDER & ACCESS",
            inst_step2_title: "Select Installation Directory & User Access",
            inst_step2_desc: "Specify the installation path (Default: <code>C:\\Program Files (x86)\\Trength Suite\\</code>). Select your preferred user access mode (<strong>Just me</strong> or <strong>Everyone</strong>), then click <strong>Next &gt;</strong>.",
            inst_step2_callout: "Selecting <strong>Everyone</strong> allows all operator accounts on this PC to run Trength POS services without requiring separate installs.",

            inst_step3_badge: "STEP 3: NETWORK TYPE",
            inst_step3_title: "Choose Connection Type (Wi-Fi or Ethernet)",
            inst_step3_desc: "Select how your Trength Server PC connects to your showroom network: choose <strong>WIFI</strong> if using a wireless router, or <strong>ETHERNET</strong> if connected via wired LAN cable. Click <strong>Next &gt;</strong>.",
            inst_step3_callout: "<strong>Offline Store Network:</strong> Both Wi-Fi and Ethernet work 100% offline without needing active internet or SIM recharges.",

            inst_step4_badge: "STEP 4: CONFIRMATION",
            inst_step4_title: "Confirm & Start System Installation",
            inst_step4_desc: "Verify your settings. The setup wizard is ready to copy application binaries, initialize the database engine, and register the background service daemon. Click <strong>Next &gt;</strong>.",
            inst_step4_callout: "The installer automatically sets up local database tables and configures local network binding.",

            inst_step5_badge: "STEP 5: UAC PERMISSION",
            inst_step5_title: "Windows User Account Control (UAC) Grant",
            inst_step5_desc: "When Windows displays the <strong>User Account Control</strong> prompt asking <em>\"Do you want to allow this app to make changes to your device?\"</em>, click <strong>Yes</strong> to grant installation privileges.",
            inst_step5_callout: "Clicking <strong>Yes</strong> grants administrative privileges required to register the Trength background service daemon on boot.",

            // Prerequisites & Phase Titles
            inst_prereq_title: "System Prerequisites & Hardware Requirements",
            inst_os_label: "Operating System:",
            inst_os_val: "Windows 10 / 11 (64-bit) or Windows Server",
            inst_cpu_label: "Processor:",
            inst_cpu_val: "Intel Core i3 / AMD Ryzen 3 or higher",
            inst_ram_label: "RAM:",
            inst_ram_val: "4 GB minimum (8 GB recommended for multi-counter POS)",
            inst_storage_label: "Storage:",
            inst_storage_val: "500 MB free SSD/HDD storage for database cache",
            inst_priv_label: "Privileges:",
            inst_priv_val: "Windows Local Administrator account",
            inst_net_label: "Network:",
            inst_net_val: "Wi-Fi or Ethernet LAN with static local subnet",

            inst_phase2_title: "Phase 2: System Restart & Service Verification",
            inst_phase2_step_title: "Step 3 & 4: Restart Workstation & Verify System Tray Icon",
            inst_phase2_desc: "Once setup finishes, reboot your computer. Restarting allows Windows to register the system service hooks and load background network daemon processes before the POS application starts.",
            inst_tray_box_title: "Locating the Trength Tray Monitor:",
            inst_tray_step1: "Navigate to the bottom-right corner of your screen (near the date and clock).",
            inst_tray_step2: "Click the small upward caret <strong>^</strong> to view the Notification Area overflow tray.",
            inst_tray_step3: "Verify that the golden <strong>Trength \"à¤¤à¥à¤°\" Icon</strong> is visible and active.",

            inst_th_menu_item: "Menu Item",
            inst_th_function: "Function & Description",
            inst_menu_launch_desc: "Opens the primary jewellery POS application and billing console.",
            inst_menu_conn_desc: "Validates local network status, cloud sync connection, and database health.",
            inst_menu_update_desc: "Fetches updated GST rates, bullion metal prices, and software patches.",
            inst_menu_cmd_desc: "Administrative utility to restart services, inspect network ports, and pair mobile devices.",

            inst_phase3_title: "Phase 3: Store Network Configuration & Testing",
            inst_phase3_step_title: "Step 5 & 6: Configure Store Network & Run Connectivity Test",
            inst_phase3_desc: "Trength is architected for continuous retail reliability. It operates both offline (instant counter billing) and synchronized across devices (sales reps using tablets on the showroom floor).",
            inst_wifi_box_title: "Wi-Fi Network Setup",
            inst_wifi_box_desc: "Connect the workstation to your secure showroom Wi-Fi network. Ensure that client isolation (AP isolation) is disabled on your router so paired mobile devices can reach the POS terminal.",
            inst_eth_box_title: "Wired LAN (Ethernet)",
            inst_eth_box_desc: "For main checkout and cashier counters, a wired Ethernet cable is strongly advised to eliminate wireless packet drops during weighing scale input and invoice printing.",

            inst_diag_title: "Running the Connectivity Diagnostics:",
            inst_diag_step1: "Right-click the golden <strong>Trength tray icon</strong>.",
            inst_diag_step2: "Select <strong>Check Connectivity</strong> from the context menu.",
            inst_diag_step3: "A green toast notification reading <strong>\"Success: Network & Database Services Active\"</strong> will appear on screen.",

            inst_phase4_title: "Phase 4: Launching Trength & First-Time Login",
            inst_phase4_step_title: "Step 8 & 9: Launch Application & Enter Store Credentials",
            inst_login_check_title: "First-Time Login Checklist:",
            inst_login_item1: "<strong>Store / Branch ID:</strong> Pre-filled from your installation code verification.",
            inst_login_item2: "<strong>Operator Username & Password:</strong> Enter the administrator credentials provided in your onboarding email.",
            inst_login_item3: "<strong>Billing Counter:</strong> Select your designated counter (e.g., <em>Counter 01 - Gold Ornaments</em>).",
            inst_login_item4: "Click <strong>Sign In</strong> to enter the main dashboard. Daily gold bullion rates will automatically load.",

            btn_zoom_image: "ðŸ” Tap to Zoom Screenshot Full Screen",
            btn_zoom_hint: "Click image to expand"
        },
        hi: {
            // Header & Navigation
            doc_title: "à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤‚à¤¥â„¢ à¤¸à¥‚à¤Ÿ | à¤°à¤¿à¤Ÿà¥‡à¤² à¤ˆà¤†à¤°à¤ªà¥€ à¤à¤µà¤‚ à¤ªà¥€à¤“à¤à¤¸ à¤¡à¥‰à¤•à¥à¤¯à¥‚à¤®à¥‡à¤‚à¤Ÿà¥‡à¤¶à¤¨",
            nav_getting_started: "à¤¶à¥à¤°à¥à¤†à¤¤ à¤•à¤°à¥‡à¤‚",
            nav_overview: "à¤“à¤µà¤°à¤µà¥à¤¯à¥‚",
            nav_installation: "à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤—à¤¾à¤‡à¤¡",
            nav_command_centre: "à¤•à¤®à¤¾à¤‚à¤¡ à¤¸à¥‡à¤‚à¤Ÿà¤°",
            nav_configurations: "à¤•à¥‰à¤¨à¥à¤«à¤¼à¤¿à¤—à¤°à¥‡à¤¶à¤¨",
            nav_troubleshoot: "à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤¨à¤¿à¤µà¤¾à¤°à¤£",
            nav_video_tutorials: "à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤Ÿà¥à¤¯à¥‚à¤Ÿà¥‹à¤°à¤¿à¤¯à¤²",
            nav_jewellery_app: "à¤œà¥à¤µà¥‡à¤²à¤°à¥€ à¤à¤ªà¥à¤²à¥€à¤•à¥‡à¤¶à¤¨",
            nav_management: "à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¨",
            nav_users: "à¤¯à¥‚à¤œà¤°à¥à¤¸",
            nav_roles: "à¤°à¥‹à¤²à¥à¤¸",
            nav_masters: "à¤®à¤¾à¤¸à¥à¤Ÿà¤°à¥à¤¸",
            nav_shop: "à¤¦à¥à¤•à¤¾à¤¨",
            nav_products: "à¤‰à¤¤à¥à¤ªà¤¾à¤¦",

            // Sidebar Masters & Shop Links (Hindi)
            nav_metals: "à¤§à¤¾à¤¤à¥ (Metals)",
            nav_metal_colors: "à¤§à¤¾à¤¤à¥ à¤•à¥‡ à¤°à¤‚à¤— (Colors)",
            nav_metal_purity: "à¤§à¤¾à¤¤à¥ à¤¶à¥à¤¦à¥à¤§à¤¤à¤¾ (Purity)",
            nav_metal_rates: "à¤§à¤¾à¤¤à¥ à¤¦à¤°à¥‡à¤‚ (Rates)",
            nav_stones: "à¤°à¤¤à¥à¤¨/à¤¨à¤— (Stones)",
            nav_stone_clarity: "à¤¨à¤— à¤•à¥à¤²à¥ˆà¤°à¤¿à¤Ÿà¥€",
            nav_stone_color: "à¤¨à¤— à¤°à¤‚à¤—",
            nav_stone_cut: "à¤¨à¤— à¤•à¤Ÿ (Cut)",
            nav_uoms: "à¤®à¤¾à¤ª à¤•à¥€ à¤‡à¤•à¤¾à¤‡à¤¯à¤¾à¤‚ (UOM)",
            nav_brands: "à¤¬à¥à¤°à¤¾à¤‚à¤¡à¥à¤¸ (Brands)",
            nav_cities: "à¤¶à¤¹à¤° (Cities)",
            nav_jewellery_types: "à¤œà¥à¤µà¥‡à¤²à¤°à¥€ à¤ªà¥à¤°à¤•à¤¾à¤°",
            nav_reasons: "à¤•à¤¾à¤°à¤£ (Reasons)",
            nav_setting_types: "à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤— à¤ªà¥à¤°à¤•à¤¾à¤°",
            nav_gst_rates: "à¤œà¥€à¤à¤¸à¤Ÿà¥€ à¤¦à¤°à¥‡à¤‚ (GST Rates)",
            nav_stores: "à¤¸à¥à¤Ÿà¥‹à¤° (Stores)",
            nav_counters: "à¤•à¤¾à¤‰à¤‚à¤Ÿà¤° (Counters)",
            nav_customers: "à¤—à¥à¤°à¤¾à¤¹à¤• (Customers)",
            nav_jewellers: "à¤•à¤¾à¤°à¥€à¤—à¤°/à¤œà¥à¤µà¥ˆà¤²à¤°à¥à¤¸",
            nav_suppliers: "à¤¸à¤ªà¥à¤²à¤¾à¤¯à¤°à¥à¤¸ (Suppliers)",
            nav_product_categories: "à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤¶à¥à¤°à¥‡à¤£à¤¿à¤¯à¤¾à¤‚",
            nav_product_metals: "à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤§à¤¾à¤¤à¥à¤à¤",
            nav_product_stones: "à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤¨à¤—",
            nav_product_types: "à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤ªà¥à¤°à¤•à¤¾à¤°",

            // Visual Installation Guide Steps (Hindi)
            inst_heading: "à¤šà¤°à¤£-à¤¦à¤°-à¤šà¤°à¤£ à¤µà¤¿à¤œà¥à¤…à¤² à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤—à¤¾à¤‡à¤¡",
            inst_subheading: "à¤…à¤ªà¤¨à¥‡ à¤¬à¤¿à¤²à¤¿à¤‚à¤— à¤ªà¥€à¤¸à¥€ à¤ªà¤° Trength Server POS à¤”à¤° API Host à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤² à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤‡à¤¨ 5 à¤†à¤¸à¤¾à¤¨ à¤¸à¥à¤•à¥à¤°à¥€à¤¨à¤¶à¥‰à¤Ÿ à¤šà¤°à¤£à¥‹à¤‚ à¤•à¤¾ à¤ªà¤¾à¤²à¤¨ à¤•à¤°à¥‡à¤‚à¥¤",
            
            inst_step1_badge: "à¤šà¤°à¤£ 1: à¤µà¤¿à¤œà¤¾à¤°à¥à¤¡ à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­",
            inst_step1_title: "Trengthâ„¢ Suite à¤µà¤¿à¤œà¤¾à¤°à¥à¤¡ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚",
            inst_step1_desc: "à¤…à¤ªà¤¨à¥‡ à¤µà¤¿à¤‚à¤¡à¥‹à¤œ à¤¬à¤¿à¤²à¤¿à¤‚à¤— à¤ªà¥€à¤¸à¥€ à¤ªà¤° à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¥€ à¤—à¤ˆ <code>TrengthSuite-Setup.msi</code> à¤«à¤¾à¤‡à¤² à¤šà¤²à¤¾à¤à¤‚à¥¤ <strong>Welcome to the Trengthâ„¢ Suite Setup Wizard</strong> à¤¸à¥à¤•à¥à¤°à¥€à¤¨ à¤†à¤¨à¥‡ à¤ªà¤° à¤†à¤—à¥‡ à¤¬à¤¢à¤¼à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ <strong>Next &gt;</strong> à¤¬à¤Ÿà¤¨ à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤",
            inst_step1_callout: "<strong>à¤¸à¥à¤à¤¾à¤µ:</strong> à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¤° à¤šà¤²à¤¾à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¥‡à¤‚ à¤•à¤¿ à¤†à¤ª à¤µà¤¿à¤‚à¤¡à¥‹à¤œ à¤à¤¡à¤®à¤¿à¤¨à¤¿à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤Ÿà¤° à¤…à¤•à¤¾à¤‰à¤‚à¤Ÿ à¤¸à¥‡ à¤²à¥‰à¤— à¤‡à¤¨ à¤¹à¥ˆà¤‚à¥¤",

            inst_step2_badge: "à¤šà¤°à¤£ 2: à¤«à¥‹à¤²à¥à¤¡à¤° à¤”à¤° à¤à¤•à¥à¤¸à¥‡à¤¸",
            inst_step2_title: "à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤«à¥‹à¤²à¥à¤¡à¤° à¤”à¤° à¤¯à¥‚à¤œà¤° à¤à¤•à¥à¤¸à¥‡à¤¸ à¤šà¥à¤¨à¥‡à¤‚",
            inst_step2_desc: "à¤…à¤ªà¤¨à¥€ à¤ªà¤¸à¤‚à¤¦ à¤•à¤¾ à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤ªà¤¾à¤¥ à¤šà¥à¤¨à¥‡à¤‚ (à¤¡à¤¿à¤«à¤¼à¥‰à¤²à¥à¤Ÿ: <code>C:\\Program Files (x86)\\Trength Suite\\</code>)à¥¤ à¤…à¤ªà¤¨à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾à¤¨à¥à¤¸à¤¾à¤° à¤¯à¥‚à¤œà¤° à¤à¤•à¥à¤¸à¥‡à¤¸ à¤®à¥‹à¤¡ (<strong>Just me</strong> à¤¯à¤¾ <strong>Everyone</strong>) à¤šà¥à¤¨à¥‡à¤‚ à¤”à¤° <strong>Next &gt;</strong> à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤",
            inst_step2_callout: "<strong>Everyone</strong> à¤šà¥à¤¨à¤¨à¥‡ à¤ªà¤° à¤‡à¤¸ à¤ªà¥€à¤¸à¥€ à¤•à¥‡ à¤¸à¤­à¥€ à¤‘à¤ªà¤°à¥‡à¤Ÿà¤° à¤…à¤•à¤¾à¤‰à¤‚à¤Ÿ à¤¬à¤¿à¤¨à¤¾ à¤¦à¥‹à¤¬à¤¾à¤°à¤¾ à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤² à¤•à¤¿à¤ Trength POS à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤° à¤¸à¤•à¥‡à¤‚à¤—à¥‡à¥¤",

            inst_step3_badge: "à¤šà¤°à¤£ 3: à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤ªà¥à¤°à¤•à¤¾à¤°",
            inst_step3_title: "à¤•à¤¨à¥‡à¤•à¥à¤¶à¤¨ à¤ªà¥à¤°à¤•à¤¾à¤° à¤šà¥à¤¨à¥‡à¤‚ (à¤µà¤¾à¤ˆ-à¤«à¤¾à¤ˆ à¤¯à¤¾ à¤ˆà¤¥à¤°à¤¨à¥‡à¤Ÿ)",
            inst_step3_desc: "à¤šà¥à¤¨à¥‡à¤‚ à¤•à¤¿ à¤†à¤ªà¤•à¤¾ à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤‚à¤¥ à¤¸à¤°à¥à¤µà¤° à¤ªà¥€à¤¸à¥€ à¤¸à¥à¤Ÿà¥‹à¤° à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤¸à¥‡ à¤•à¥ˆà¤¸à¥‡ à¤œà¥à¤¡à¤¼à¥‡à¤—à¤¾: à¤¯à¤¦à¤¿ à¤µà¤¾à¤¯à¤°à¤²à¥‡à¤¸ à¤°à¤¾à¤‰à¤Ÿà¤° à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤° à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚ à¤¤à¥‹ <strong>WIFI</strong> à¤šà¥à¤¨à¥‡à¤‚, à¤¯à¤¾ à¤•à¥‡à¤¬à¤² à¤•à¤¨à¥‡à¤•à¥à¤¶à¤¨ à¤•à¥‡ à¤²à¤¿à¤ <strong>ETHERNET</strong> à¤šà¥à¤¨à¥‡à¤‚à¥¤ à¤«à¤¿à¤° <strong>Next &gt;</strong> à¤¦à¤¬à¤¾à¤à¤‚à¥¤",
            inst_step3_callout: "<strong>100% à¤‘à¤«à¤²à¤¾à¤‡à¤¨ à¤²à¥‹à¤•à¤² à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤•:</strong> à¤µà¤¾à¤ˆ-à¤«à¤¾à¤ˆ à¤”à¤° à¤ˆà¤¥à¤°à¤¨à¥‡à¤Ÿ à¤¦à¥‹à¤¨à¥‹à¤‚ à¤®à¥‹à¤¡ à¤¬à¤¿à¤¨à¤¾ à¤‡à¤‚à¤Ÿà¤°à¤¨à¥‡à¤Ÿ à¤¯à¤¾ à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤•à¥‡ 100% à¤‘à¤«à¤²à¤¾à¤‡à¤¨ à¤•à¤¾à¤® à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",

            inst_step4_badge: "à¤šà¤°à¤£ 4: à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚",
            inst_step4_title: "à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚",
            inst_step4_desc: "à¤…à¤ªà¤¨à¥€ à¤šà¥à¤¨à¥€ à¤¹à¥à¤ˆ à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤—à¥à¤¸ à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤•à¤°à¥‡à¤‚à¥¤ à¤µà¤¿à¤œà¤¾à¤°à¥à¤¡ à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤«à¤¾à¤‡à¤²à¥‡à¤‚ à¤•à¥‰à¤ªà¥€ à¤•à¤°à¤¨à¥‡ à¤”à¤° à¤¬à¥ˆà¤•à¤—à¥à¤°à¤¾à¤‰à¤‚à¤¡ à¤¸à¤°à¥à¤µà¤¿à¤¸ à¤°à¤œà¤¿à¤¸à¥à¤Ÿà¤° à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¥ˆà¤¯à¤¾à¤° à¤¹à¥ˆà¥¤ à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤¶à¥à¤°à¥‚ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ <strong>Next &gt;</strong> à¤¦à¤¬à¤¾à¤à¤‚à¥¤",
            inst_step4_callout: "à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¤° à¤¸à¥à¤µà¤¤à¤ƒ à¤¹à¥€ à¤²à¥‹à¤•à¤² à¤¡à¥‡à¤Ÿà¤¾à¤¬à¥‡à¤¸ à¤Ÿà¥‡à¤¬à¤² à¤”à¤° à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤ªà¥‹à¤°à¥à¤Ÿ à¤¬à¤¾à¤‡à¤‚à¤¡à¤¿à¤‚à¤— à¤•à¥‰à¤¨à¥à¤«à¤¼à¤¿à¤—à¤° à¤•à¤° à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆà¥¤",

            inst_step5_badge: "à¤šà¤°à¤£ 5: UAC à¤¸à¤¿à¤•à¥à¤¯à¥‹à¤°à¤¿à¤Ÿà¥€ à¤ªà¤°à¤®à¤¿à¤¶à¤¨",
            inst_step5_title: "à¤µà¤¿à¤‚à¤¡à¥‹à¤œ à¤¯à¥‚à¤œà¤° à¤…à¤•à¤¾à¤‰à¤‚à¤Ÿ à¤•à¤‚à¤Ÿà¥à¤°à¥‹à¤² (UAC) à¤ªà¤°à¤®à¤¿à¤¶à¤¨ à¤¦à¥‡à¤‚",
            inst_step5_desc: "à¤œà¤¬ à¤µà¤¿à¤‚à¤¡à¥‹à¤œ à¤¸à¥à¤•à¥à¤°à¥€à¤¨ à¤ªà¤° <strong>User Account Control</strong> à¤ªà¥à¤°à¥‰à¤®à¥à¤ªà¥à¤Ÿ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡ (*\"Do you want to allow this app to make changes...\"*), à¤¤à¥‹ <strong>Yes</strong> à¤¬à¤Ÿà¤¨ à¤¦à¤¬à¤¾à¤•à¤° à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤•à¥€ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤¦à¥‡à¤‚à¥¤",
            inst_step5_callout: "<strong>Yes</strong> à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¤¨à¥‡ à¤¸à¥‡ à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤¸à¤°à¥à¤µà¤¿à¤¸ à¤•à¥‹ à¤•à¤‚à¤ªà¥à¤¯à¥‚à¤Ÿà¤° à¤šà¤¾à¤²à¥‚ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¨à¥‡ à¤•à¥€ à¤ªà¥à¤°à¤¶à¤¾à¤¸à¤¨à¤¿à¤• à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤®à¤¿à¤² à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤",

            // Image Translation Badges for Setup Dialogs (Hindi)
            screen1_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>à¤šà¤¿à¤¤à¥à¤° 1 à¤•à¤¾ à¤¹à¤¿à¤‚à¤¦à¥€ à¤…à¤¨à¥à¤µà¤¾à¤¦:</strong> 'Welcome to the Trength Suite Setup Wizard' - à¤†à¤—à¥‡ à¤¬à¤¢à¤¼à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ <strong>Next &gt;</strong> à¤¬à¤Ÿà¤¨ à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤",
            screen2_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>à¤šà¤¿à¤¤à¥à¤° 2 à¤•à¤¾ à¤¹à¤¿à¤‚à¤¦à¥€ à¤…à¤¨à¥à¤µà¤¾à¤¦:</strong> à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤«à¥‹à¤²à¥à¤¡à¤° à¤¡à¤¿à¤«à¤¼à¥‰à¤²à¥à¤Ÿ <code>C:\\Program Files (x86)...</code> à¤°à¤¹à¤¨à¥‡ à¤¦à¥‡à¤‚à¥¤ 'Just me' (à¤•à¥‡à¤µà¤² à¤†à¤ª) à¤¯à¤¾ 'Everyone' (à¤¸à¤­à¥€ à¤¯à¥‚à¤œà¤°) à¤šà¥à¤¨à¤•à¤° <strong>Next &gt;</strong> à¤¦à¤¬à¤¾à¤à¤‚à¥¤",
            screen3_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>à¤šà¤¿à¤¤à¥à¤° 3 à¤•à¤¾ à¤¹à¤¿à¤‚à¤¦à¥€ à¤…à¤¨à¥à¤µà¤¾à¤¦:</strong> à¤¸à¥à¤Ÿà¥‹à¤° à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤ªà¥à¤°à¤•à¤¾à¤° - à¤µà¤¾à¤¯à¤°à¤²à¥‡à¤¸ à¤µà¤¾à¤ˆ-à¤«à¤¾à¤ˆ à¤•à¥‡ à¤²à¤¿à¤ <strong>WIFI</strong> à¤¯à¤¾ à¤•à¥‡à¤¬à¤² à¤•à¤¨à¥‡à¤•à¥à¤¶à¤¨ à¤•à¥‡ à¤²à¤¿à¤ <strong>ETHERNET</strong> à¤šà¥à¤¨à¤•à¤° <strong>Next &gt;</strong> à¤¦à¤¬à¤¾à¤à¤‚à¥¤",
            screen4_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>à¤šà¤¿à¤¤à¥à¤° 4 à¤•à¤¾ à¤¹à¤¿à¤‚à¤¦à¥€ à¤…à¤¨à¥à¤µà¤¾à¤¦:</strong> 'Confirm Installation' - à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤¶à¥à¤°à¥‚ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ <strong>Next &gt;</strong> à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤",
            screen5_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>à¤šà¤¿à¤¤à¥à¤° 5 à¤•à¤¾ à¤¹à¤¿à¤‚à¤¦à¥€ à¤…à¤¨à¥à¤µà¤¾à¤¦:</strong> à¤µà¤¿à¤‚à¤¡à¥‹à¤œ à¤¯à¥‚à¤œà¤° à¤…à¤•à¤¾à¤‰à¤‚à¤Ÿ à¤•à¤‚à¤Ÿà¥à¤°à¥‹à¤² (UAC) à¤ªà¥à¤°à¥‰à¤®à¥à¤ªà¥à¤Ÿ - à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤¦à¥‡à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ <strong>Yes</strong> (à¤¹à¤¾à¤) à¤¬à¤Ÿà¤¨ à¤¦à¤¬à¤¾à¤à¤‚à¥¤",

            // Prerequisites & Phase Titles (Hindi)
            inst_prereq_title: "à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾à¤à¤‚ à¤”à¤° à¤¹à¤¾à¤°à¥à¤¡à¤µà¥‡à¤¯à¤° à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾à¤à¤‚",
            inst_os_label: "à¤‘à¤ªà¤°à¥‡à¤Ÿà¤¿à¤‚à¤— à¤¸à¤¿à¤¸à¥à¤Ÿà¤®:",
            inst_os_val: "à¤µà¤¿à¤‚à¤¡à¥‹à¤œ 10 / 11 (64-à¤¬à¤¿à¤Ÿ) à¤¯à¤¾ à¤µà¤¿à¤‚à¤¡à¥‹à¤œ à¤¸à¤°à¥à¤µà¤°",
            inst_cpu_label: "à¤ªà¥à¤°à¥‹à¤¸à¥‡à¤¸à¤°:",
            inst_cpu_val: "à¤‡à¤‚à¤Ÿà¥‡à¤² à¤•à¥‹à¤° i3 / à¤à¤à¤®à¤¡à¥€ à¤°à¤¾à¤¯à¤œà¤¨ 3 à¤¯à¤¾ à¤‰à¤šà¥à¤š",
            inst_ram_label: "à¤°à¥ˆà¤®:",
            inst_ram_val: "4 GB à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® (à¤®à¤²à¥à¤Ÿà¥€-à¤•à¤¾à¤‰à¤‚à¤Ÿà¤° POS à¤•à¥‡ à¤²à¤¿à¤ 8 GB à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¿à¤¤)",
            inst_storage_label: "à¤¸à¥à¤Ÿà¥‹à¤°à¥‡à¤œ:",
            inst_storage_val: "à¤¡à¥‡à¤Ÿà¤¾à¤¬à¥‡à¤¸ à¤•à¥ˆà¤¶ à¤•à¥‡ à¤²à¤¿à¤ 500 MB à¤«à¥à¤°à¥€ SSD/HDD à¤¸à¥à¤ªà¥‡à¤¸",
            inst_priv_label: "à¤…à¤¨à¥à¤®à¤¤à¤¿ (Privileges):",
            inst_priv_val: "à¤µà¤¿à¤‚à¤¡à¥‹à¤œ à¤²à¥‹à¤•à¤² à¤à¤¡à¤®à¤¿à¤¨à¤¿à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤Ÿà¤° à¤…à¤•à¤¾à¤‰à¤‚à¤Ÿ",
            inst_net_label: "à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤•:",
            inst_net_val: "à¤¸à¥à¤Ÿà¥ˆà¤Ÿà¤¿à¤• à¤²à¥‹à¤•à¤² à¤¸à¤¬à¤¨à¥‡à¤Ÿ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤µà¤¾à¤ˆ-à¤«à¤¾à¤ˆ à¤¯à¤¾ à¤ˆà¤¥à¤°à¤¨à¥‡à¤Ÿ LAN",

            inst_phase2_title: "à¤šà¤°à¤£ 2: à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤°à¥€à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿ à¤”à¤° à¤¸à¤°à¥à¤µà¤¿à¤¸ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨",
            inst_phase2_step_title: "à¤¸à¥à¤Ÿà¥‡à¤ª 3 & 4: à¤µà¤°à¥à¤•à¤¸à¥à¤Ÿà¥‡à¤¶à¤¨ à¤°à¥€à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤Ÿà¥à¤°à¥‡ à¤†à¤‡à¤•à¤¨ à¤œà¤¾à¤‚à¤šà¥‡à¤‚",
            inst_phase2_desc: "à¤¸à¥‡à¤Ÿà¤…à¤ª à¤ªà¥‚à¤°à¤¾ à¤¹à¥‹à¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦, à¤…à¤ªà¤¨à¤¾ à¤•à¤‚à¤ªà¥à¤¯à¥‚à¤Ÿà¤° à¤°à¥€à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚à¥¤ à¤°à¥€à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿ à¤•à¤°à¤¨à¥‡ à¤¸à¥‡ à¤µà¤¿à¤‚à¤¡à¥‹à¤œ à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤¸à¤°à¥à¤µà¤¿à¤¸ à¤•à¥‹ à¤¬à¥ˆà¤•à¤—à¥à¤°à¤¾à¤‰à¤‚à¤¡ à¤®à¥‡à¤‚ à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¨à¥‡ à¤•à¥€ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤®à¤¿à¤²à¤¤à¥€ à¤¹à¥ˆà¥¤",
            inst_tray_box_title: "à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤‚à¤¥ à¤Ÿà¥à¤°à¥‡ à¤®à¥‰à¤¨à¤¿à¤Ÿà¤° à¤¢à¥‚à¤‚à¤¢à¤¨à¤¾:",
            inst_tray_step1: "à¤…à¤ªà¤¨à¥€ à¤¸à¥à¤•à¥à¤°à¥€à¤¨ à¤•à¥‡ à¤¨à¥€à¤šà¥‡-à¤¦à¤¾à¤à¤‚ à¤•à¥‹à¤¨à¥‡ (à¤¤à¤¾à¤°à¥€à¤– à¤”à¤° à¤˜à¤¡à¤¼à¥€ à¤•à¥‡ à¤ªà¤¾à¤¸) à¤®à¥‡à¤‚ à¤œà¤¾à¤à¤‚à¥¤",
            inst_tray_step2: "à¤“à¤µà¤°à¤«à¥à¤²à¥‹ à¤Ÿà¥à¤°à¥‡ à¤¦à¥‡à¤–à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤›à¥‹à¤Ÿà¥‡ à¤Šà¤ªà¤° à¤•à¥€ à¤“à¤° à¤¤à¥€à¤° <strong>^</strong> à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤",
            inst_tray_step3: "à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤•à¤°à¥‡à¤‚ à¤•à¤¿ à¤¸à¥à¤µà¤°à¥à¤£à¤¿à¤® <strong>Trength \"à¤¤à¥à¤°\" à¤†à¤‡à¤•à¤¨</strong> à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤¹à¥ˆà¥¤",

            inst_th_menu_item: "à¤®à¥‡à¤¨à¥à¤¯à¥‚ à¤†à¤‡à¤Ÿà¤®",
            inst_th_function: "à¤•à¤¾à¤°à¥à¤¯ / à¤µà¤¿à¤µà¤°à¤£",
            inst_menu_launch_desc: "à¤®à¥à¤–à¥à¤¯ à¤œà¥à¤µà¥‡à¤²à¤°à¥€ POS à¤à¤ªà¥à¤²à¥€à¤•à¥‡à¤¶à¤¨ à¤”à¤° à¤¬à¤¿à¤²à¤¿à¤‚à¤— à¤•à¤‚à¤¸à¥‹à¤² à¤–à¥‹à¤²à¤¤à¤¾ à¤¹à¥ˆà¥¤",
            inst_menu_conn_desc: "à¤²à¥‹à¤•à¤² à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤¸à¥à¤¥à¤¿à¤¤à¤¿, à¤•à¥à¤²à¤¾à¤‰à¤¡ à¤¸à¤¿à¤‚à¤• à¤•à¤¨à¥‡à¤•à¥à¤¶à¤¨ à¤”à¤° à¤¡à¥‡à¤Ÿà¤¾à¤¬à¥‡à¤¸ à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤",
            inst_menu_update_desc: "à¤¨à¤µà¥€à¤¨à¤¤à¤® à¤œà¥€à¤à¤¸à¤Ÿà¥€ à¤¦à¤°à¥‡à¤‚, à¤¬à¥à¤²à¤¿à¤¯à¤¨ à¤§à¤¾à¤¤à¥ à¤®à¥‚à¤²à¥à¤¯ à¤”à¤° à¤¸à¥‰à¤«à¤¼à¥à¤Ÿà¤µà¥‡à¤¯à¤° à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤",
            inst_menu_cmd_desc: "à¤¸à¤°à¥à¤µà¤¿à¤¸ à¤°à¥€à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿ à¤•à¤°à¤¨à¥‡, à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤ªà¥‹à¤°à¥à¤Ÿ à¤œà¤¾à¤‚à¤šà¤¨à¥‡ à¤”à¤° à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤ªà¥‡à¤¯à¤° à¤•à¤°à¤¨à¥‡ à¤•à¥€ à¤ªà¥à¤°à¤¶à¤¾à¤¸à¤¨à¤¿à¤• à¤¸à¥à¤µà¤¿à¤§à¤¾à¥¤",

            inst_phase3_title: "à¤šà¤°à¤£ 3: à¤¸à¥à¤Ÿà¥‹à¤° à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤•à¥‰à¤¨à¥à¤«à¤¼à¤¿à¤—à¤°à¥‡à¤¶à¤¨ à¤”à¤° à¤ªà¤°à¥€à¤•à¥à¤·à¤£",
            inst_phase3_step_title: "à¤¸à¥à¤Ÿà¥‡à¤ª 5 & 6: à¤¸à¥à¤Ÿà¥‹à¤° à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤•à¥‰à¤¨à¥à¤«à¤¼à¤¿à¤—à¤° à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤•à¤¨à¥‡à¤•à¥à¤Ÿà¤¿à¤µà¤¿à¤Ÿà¥€ à¤Ÿà¥‡à¤¸à¥à¤Ÿ à¤šà¤²à¤¾à¤à¤‚",
            inst_phase3_desc: "à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤‚à¤¥ à¤°à¤¿à¤Ÿà¥‡à¤² à¤µà¤¿à¤¶à¥à¤µà¤¸à¤¨à¥€à¤¯à¤¤à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤¡à¤¿à¤œà¤¼à¤¾à¤‡à¤¨ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¹ à¤‘à¤«à¤²à¤¾à¤‡à¤¨ (à¤•à¤¾à¤‰à¤‚à¤Ÿà¤° à¤¬à¤¿à¤²à¤¿à¤‚à¤—) à¤”à¤° à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤¸à¤¿à¤‚à¤• (à¤Ÿà¥ˆà¤¬à¤²à¥‡à¤Ÿ à¤¬à¤¿à¤²à¤¿à¤‚à¤—) à¤¦à¥‹à¤¨à¥‹à¤‚ à¤¤à¤°à¤¹ à¤¸à¥‡ à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤",
            inst_wifi_box_title: "à¤µà¤¾à¤ˆ-à¤«à¤¾à¤ˆ à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤¸à¥‡à¤Ÿà¤…à¤ª",
            inst_wifi_box_desc: "à¤µà¤°à¥à¤•à¤¸à¥à¤Ÿà¥‡à¤¶à¤¨ à¤•à¥‹ à¤…à¤ªà¤¨à¥‡ à¤¶à¥‹à¤°à¥‚à¤® à¤µà¤¾à¤ˆ-à¤«à¤¾à¤ˆ à¤¸à¥‡ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚à¥¤ à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¥‡à¤‚ à¤•à¤¿ à¤†à¤ªà¤•à¥‡ à¤°à¤¾à¤‰à¤Ÿà¤° à¤ªà¤° AP à¤†à¤‡à¤¸à¥‹à¤²à¥‡à¤¶à¤¨ à¤¬à¤‚à¤¦ à¤¹à¥ˆ à¤¤à¤¾à¤•à¤¿ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤‰à¤ªà¤•à¤°à¤£ à¤•à¤¨à¥‡à¤•à¥à¤Ÿ à¤¹à¥‹ à¤¸à¤•à¥‡à¤‚à¥¤",
            inst_eth_box_title: "à¤µà¤¾à¤¯à¤°à¥à¤¡ LAN (à¤ˆà¤¥à¤°à¤¨à¥‡à¤Ÿ)",
            inst_eth_box_desc: "à¤®à¥à¤–à¥à¤¯ à¤•à¥ˆà¤¶à¤¿à¤¯à¤° à¤•à¤¾à¤‰à¤‚à¤Ÿà¤° à¤•à¥‡ à¤²à¤¿à¤ à¤ˆà¤¥à¤°à¤¨à¥‡à¤Ÿ à¤•à¥‡à¤¬à¤² à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¨à¥‡ à¤•à¥€ à¤¸à¤²à¤¾à¤¹ à¤¦à¥€ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆ à¤¤à¤¾à¤•à¤¿ à¤ªà¥à¤°à¤¿à¤‚à¤Ÿà¤¿à¤‚à¤— à¤”à¤° à¤µà¤œà¤¨ à¤•à¤¾à¤‚à¤Ÿà¥‡ à¤•à¤¾ à¤¡à¥‡à¤Ÿà¤¾ à¤¬à¤¿à¤¨à¤¾ à¤•à¤¿à¤¸à¥€ à¤°à¥à¤•à¤¾à¤µà¤Ÿ à¤•à¥‡ à¤®à¤¿à¤²à¥‡à¥¤",

            inst_diag_title: "à¤•à¤¨à¥‡à¤•à¥à¤Ÿà¤¿à¤µà¤¿à¤Ÿà¥€ à¤¡à¤¾à¤¯à¤—à¥à¤¨à¥‹à¤¸à¥à¤Ÿà¤¿à¤•à¥à¤¸ à¤šà¤²à¤¾à¤¨à¤¾:",
            inst_diag_step1: "à¤—à¥‹à¤²à¥à¤¡à¤¨ <strong>Trength à¤Ÿà¥à¤°à¥‡ à¤†à¤‡à¤•à¤¨</strong> à¤ªà¤° à¤°à¤¾à¤‡à¤Ÿ-à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤",
            inst_diag_step2: "à¤®à¥‡à¤¨à¥à¤¯à¥‚ à¤®à¥‡à¤‚ à¤¸à¥‡ <strong>Check Connectivity</strong> à¤šà¥à¤¨à¥‡à¤‚à¥¤",
            inst_diag_step3: "à¤¸à¥à¤•à¥à¤°à¥€à¤¨ à¤ªà¤° <strong>\"Success: Network & Database Services Active\"</strong> à¤•à¤¾ à¤¹à¤°à¤¾ à¤®à¥ˆà¤¸à¥‡à¤œ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡à¤—à¤¾à¥¤",

            inst_phase4_title: "à¤šà¤°à¤£ 4: à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤‚à¤¥ à¤–à¥‹à¤²à¤¨à¤¾ à¤”à¤° à¤ªà¤¹à¤²à¥€ à¤¬à¤¾à¤° à¤²à¥‰à¤—à¤¿à¤¨",
            inst_phase4_step_title: "à¤¸à¥à¤Ÿà¥‡à¤ª 8 & 9: à¤à¤ªà¥à¤²à¥€à¤•à¥‡à¤¶à¤¨ à¤–à¥‹à¤²à¥‡à¤‚ à¤”à¤° à¤¸à¥à¤Ÿà¥‹à¤° à¤•à¥à¤°à¥‡à¤¡à¥‡à¤‚à¤¶à¤¿à¤¯à¤² à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
            inst_login_check_title: "à¤ªà¤¹à¤²à¥€ à¤¬à¤¾à¤° à¤²à¥‰à¤—à¤¿à¤¨ à¤šà¥‡à¤•à¤²à¤¿à¤¸à¥à¤Ÿ:",
            inst_login_item1: "<strong>à¤¸à¥à¤Ÿà¥‹à¤° / à¤¬à¥à¤°à¤¾à¤‚à¤š à¤†à¤ˆà¤¡à¥€:</strong> à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤•à¥‹à¤¡ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨ à¤¸à¥‡ à¤¸à¥à¤µà¤¤à¤ƒ à¤­à¤°à¤¾ à¤¹à¥à¤†à¥¤",
            inst_login_item2: "<strong>à¤‘à¤ªà¤°à¥‡à¤Ÿà¤° à¤¯à¥‚à¤œà¤°à¤¨à¥‡à¤® à¤”à¤° à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡:</strong> à¤…à¤ªà¤¨à¥‡ à¤‘à¤¨à¤¬à¥‹à¤°à¥à¤¡à¤¿à¤‚à¤— à¤ˆà¤®à¥‡à¤² à¤®à¥‡à¤‚ à¤¦à¤¿à¤ à¤—à¤ à¤à¤¡à¤®à¤¿à¤¨à¤¿à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤Ÿà¤° à¤•à¥à¤°à¥‡à¤¡à¥‡à¤‚à¤¶à¤¿à¤¯à¤² à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤",
            inst_login_item3: "<strong>à¤¬à¤¿à¤²à¤¿à¤‚à¤— à¤•à¤¾à¤‰à¤‚à¤Ÿà¤°:</strong> à¤…à¤ªà¤¨à¤¾ à¤¨à¤¿à¤°à¥à¤§à¤¾à¤°à¤¿à¤¤ à¤•à¤¾à¤‰à¤‚à¤Ÿà¤° à¤šà¥à¤¨à¥‡à¤‚ (à¤‰à¤¦à¤¾. <em>Counter 01 - Gold Ornaments</em>)à¥¤",
            inst_login_item4: "à¤®à¥à¤–à¥à¤¯ à¤¡à¥ˆà¤¶à¤¬à¥‹à¤°à¥à¤¡ à¤®à¥‡à¤‚ à¤ªà¥à¤°à¤µà¥‡à¤¶ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ <strong>Sign In</strong> à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤ à¤¦à¥ˆà¤¨à¤¿à¤• à¤¸à¥‹à¤¨à¥‡-à¤šà¤¾à¤‚à¤¦à¥€ à¤•à¥‡ à¤­à¤¾à¤µ à¤¸à¥à¤µà¤¤à¤ƒ à¤²à¥‹à¤¡ à¤¹à¥‹ à¤œà¤¾à¤à¤‚à¤—à¥‡à¥¤",

            btn_zoom_image: "ðŸ” à¤ªà¥‚à¤°à¤¾ à¤¸à¥à¤•à¥à¤°à¥€à¤¨à¤¶à¥‰à¤Ÿ à¤¦à¥‡à¤–à¥‡à¤‚ (Full Screen Zoom)",
            btn_zoom_hint: "à¤¬à¤¡à¤¼à¤¾ à¤¦à¥‡à¤–à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤šà¤¿à¤¤à¥à¤° à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚",
            support_title: "à¤à¤‚à¤Ÿà¤°à¤ªà¥à¤°à¤¾à¤‡à¤œà¤¼ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤”à¤° à¤‘à¤¨à¤¬à¥‹à¤°à¥à¤¡à¤¿à¤‚à¤— à¤¸à¤ªà¥‹à¤°à¥à¤Ÿ:",
            support_desc: "à¤¦à¥à¤•à¤¾à¤¨ à¤•à¤¾ à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤¸à¥‡à¤Ÿà¤…à¤ª à¤•à¤°à¤¨à¥‡, à¤µà¤œà¤¨ à¤•à¤¾à¤‚à¤Ÿà¤¾ à¤œà¥‹à¤¡à¤¼à¤¨à¥‡, à¤¯à¤¾ à¤Ÿà¥ˆà¤¬à¤²à¥‡à¤Ÿ à¤¬à¤¿à¤²à¤¿à¤‚à¤— à¤¶à¥à¤°à¥‚ à¤•à¤°à¤¨à¥‡ à¤®à¥‡à¤‚ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤šà¤¾à¤¹à¤¿à¤? à¤¹à¤®à¤¾à¤°à¥€ à¤¤à¤•à¤¨à¥€à¤•à¥€ à¤Ÿà¥€à¤® à¤¸à¥‡ <a href=\"mailto:support@trength.in\" class=\"fw-bold\">support@trength.in</a> à¤ªà¤° à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤¹à¤®à¤¾à¤°à¥‡ à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤• à¤ªà¥‹à¤°à¥à¤Ÿà¤² <a href=\"https://trength.in\" target=\"_blank\" class=\"fw-bold\">https://trength.in</a> à¤ªà¤° à¤œà¤¾à¤à¤‚à¥¤"
        }
    },

    setLanguage: function(lang) {
        if (!this.translations[lang]) lang = 'en';
        this.currentLang = lang;
        try {
            localStorage.setItem('trength_docs_lang', lang);
        } catch(e) {}

        const dict = this.translations[lang];

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Toggle language-specific banners (e.g. Hindi image translation callouts)
        if (lang === 'hi') {
            document.querySelectorAll('[data-i18n-hi-only]').forEach(el => {
                el.classList.remove('d-none');
                const key = el.getAttribute('data-i18n-hi-only');
                if (dict[key]) el.innerHTML = dict[key];
            });
            document.querySelectorAll('[data-i18n-en-only]').forEach(el => el.classList.add('d-none'));
        } else {
            document.querySelectorAll('[data-i18n-hi-only]').forEach(el => el.classList.add('d-none'));
            document.querySelectorAll('[data-i18n-en-only]').forEach(el => {
                el.classList.remove('d-none');
                const key = el.getAttribute('data-i18n-en-only');
                if (dict[key]) el.innerHTML = dict[key];
            });
        }

        // Update button states
        const btnEn = document.getElementById('btn-lang-en');
        const btnHi = document.getElementById('btn-lang-hi');
        if (btnEn && btnHi) {
            if (lang === 'hi') {
                btnEn.classList.remove('active', 'btn-primary');
                btnHi.classList.add('active');
                btnHi.classList.remove('btn-warning', 'btn-light-warning');
            } else {
                btnHi.classList.remove('active', 'btn-warning');
                btnEn.classList.add('active');
                btnEn.classList.remove('btn-light-primary');
            }
        }

        // Update document title if present
        if (dict.doc_title) {
            document.title = dict.doc_title;
        }

        // Adjust document language attribute
        document.documentElement.setAttribute('lang', lang);
    },

    init: function() {
        let savedLang = 'en';
        try {
            savedLang = localStorage.getItem('trength_docs_lang') || 'en';
        } catch(e) {}
        this.setLanguage(savedLang);
    }
};

// Global helper for buttons
function setLanguage(lang) {
    TrengthI18n.setLanguage(lang);
}

// Global helper for image zoom modals
window.openCinematicModal = function(imgSrc, titleText) {
    let modalEl = document.getElementById('cinematicModal');
    if (!modalEl) {
        modalEl = document.createElement('div');
        modalEl.id = 'cinematicModal';
        modalEl.className = 'modal fade';
        modalEl.setAttribute('tabindex', '-1');
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content shadow-lg border-0">
                    <div class="modal-header py-3 px-5 border-bottom bg-light">
                        <h5 class="modal-title fw-bolder text-dark" id="cinematicModalLabel">Preview</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center p-4 bg-light">
                        <img id="cinematicModalImg" src="" class="img-fluid rounded border shadow-sm" style="max-height: 80vh; object-fit: contain; background: #fff;" alt="Full Resolution Preview" />
                    </div>
                    <div class="modal-footer border-top py-2 px-5 text-center justify-content-center">
                        <span class="text-muted fs-8"><i class="bi bi-info-circle me-1"></i>Trengthâ„¢ Retail Suite</span>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(modalEl);
    }
    const modalImg = document.getElementById('cinematicModalImg');
    const modalTitle = document.getElementById('cinematicModalLabel');
    if (modalImg) modalImg.src = imgSrc;
    if (modalTitle && titleText) modalTitle.innerText = titleText;

    if (window.bootstrap && window.bootstrap.Modal) {
        const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.show();
    } else if (window.$ && $(modalEl).modal) {
        $(modalEl).modal('show');
    }
};

// Auto initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        TrengthI18n.init();
    });
} else {
    TrengthI18n.init();
}