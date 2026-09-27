/**
 * Trength Suite Documentation - Multilingual Support (English & Hindi)
 * Instant client-side switching with localStorage persistence
 */

const TrengthI18n = {
    currentLang: 'en',
    translations: {
        en: {
            // Header & Navigation
            doc_title: "Trength™ Suite | Retail ERP & POS Documentation",
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
            hero_heading: "Empower Your Retail Enterprise with <span class=\"text-primary position-relative d-inline-block\">Trength™ Suite</span>",
            hero_subtitle: "A high-speed, enterprise-grade retail POS and inventory management platform engineered for modern commercial operations. Trength provides specialized, domain-tailored software applications for <strong>Jewellery Showrooms</strong>, <strong>Mobile & Telecom Outlets</strong>, <strong>Clothing & Fashion Chains</strong>, and <strong>Consumer Electronics Retailers</strong>.",
            hero_btn_install: "<i class=\"bi bi-box-arrow-in-down me-1\"></i>Quick Installation Guide",
            hero_btn_command: "<i class=\"bi bi-sliders me-1\"></i>Command Centre Setup",
            hero_btn_diagnostics: "<i class=\"bi bi-wrench me-1\"></i>System Diagnostics",
            hero_arch_title: "100% Offline Local Store Network",
            hero_arch_desc: "Zero internet required. Single host PC connected to an offline Wi-Fi router; mobile sales reps scan QR tags and sync instantly with attached receipt & QR label printers.",
            hero_badge_airgap: "AIR-GAPPED READY",

            // Section 1: Why Choose Trength Suite
            sec1_title: "Why Choose Trength™ Suite?",
            sec1_subtitle: "Engineered for retail owners who demand speed, zero hardware bloat, and total data sovereignty",

            // Support Notice & Footer
            support_title: "Enterprise Onboarding & Technical Assistance:",
            support_desc: "Need assistance setting up your store network or configuring multi-counter tablet billing? Contact our engineering team at <a href=\"mailto:support@trength.in\" class=\"fw-bold\">support@trength.in</a> or visit <a href=\"https://trength.in\" target=\"_blank\" class=\"fw-bold\">https://trength.in</a>.",

            // Visual Installation Guide Steps
            inst_heading: "Step-by-Step Visual Installation Guide",
            inst_subheading: "Follow these 5 visual setup screens to install Trength Server POS & API Host on your billing PC.",
            
            inst_step1_badge: "STEP 1: WELCOME WIZARD",
            inst_step1_title: "Launch Trength™ Suite Setup Wizard",
            inst_step1_desc: "Run the downloaded <code>TrengthSuite-Setup.msi</code> installer on your Windows billing PC. When the <strong>Welcome to the Trength™ Suite Setup Wizard</strong> screen appears, click <strong>Next &gt;</strong> to begin installation.",
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
            inst_tray_step3: "Verify that the golden <strong>Trength \"त्र\" Icon</strong> is visible and active.",

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

            btn_zoom_image: "🔍 Tap to Zoom Screenshot Full Screen",
            btn_zoom_hint: "Click image to expand"
        },
        hi: {
            // Header & Navigation
            doc_title: "स्ट्रेंथ™ सूट | रिटेल ईआरपी एवं पीओएस डॉक्यूमेंटेशन",
            nav_getting_started: "शुरुआत करें",
            nav_overview: "ओवरव्यू",
            nav_installation: "इंस्टॉलेशन गाइड",
            nav_command_centre: "कमांड सेंटर",
            nav_configurations: "कॉन्फ़िगरेशन",
            nav_troubleshoot: "समस्या निवारण",
            nav_video_tutorials: "वीडियो ट्यूटोरियल",
            nav_jewellery_app: "ज्वेलरी एप्लीकेशन",
            nav_management: "प्रबंधन",
            nav_users: "यूजर्स",
            nav_roles: "रोल्स",
            nav_masters: "मास्टर्स",
            nav_shop: "दुकान",
            nav_products: "उत्पाद",

            // Sidebar Masters & Shop Links (Hindi)
            nav_metals: "धातु (Metals)",
            nav_metal_colors: "धातु के रंग (Colors)",
            nav_metal_purity: "धातु शुद्धता (Purity)",
            nav_metal_rates: "धातु दरें (Rates)",
            nav_stones: "रत्न/नग (Stones)",
            nav_stone_clarity: "नग क्लैरिटी",
            nav_stone_color: "नग रंग",
            nav_stone_cut: "नग कट (Cut)",
            nav_uoms: "माप की इकाइयां (UOM)",
            nav_brands: "ब्रांड्स (Brands)",
            nav_cities: "शहर (Cities)",
            nav_jewellery_types: "ज्वेलरी प्रकार",
            nav_reasons: "कारण (Reasons)",
            nav_setting_types: "सेटिंग प्रकार",
            nav_gst_rates: "जीएसटी दरें (GST Rates)",
            nav_stores: "स्टोर (Stores)",
            nav_counters: "काउंटर (Counters)",
            nav_customers: "ग्राहक (Customers)",
            nav_jewellers: "कारीगर/ज्वैलर्स",
            nav_suppliers: "सप्लायर्स (Suppliers)",
            nav_product_categories: "उत्पाद श्रेणियां",
            nav_product_metals: "उत्पाद धातुएँ",
            nav_product_stones: "उत्पाद नग",
            nav_product_types: "उत्पाद प्रकार",

            // Visual Installation Guide Steps (Hindi)
            inst_heading: "चरण-दर-चरण विजुअल इंस्टॉलेशन गाइड",
            inst_subheading: "अपने बिलिंग पीसी पर Trength Server POS और API Host इंस्टॉल करने के लिए इन 5 आसान स्क्रीनशॉट चरणों का पालन करें।",
            
            inst_step1_badge: "चरण 1: विजार्ड प्रारंभ",
            inst_step1_title: "Trength™ Suite विजार्ड शुरू करें",
            inst_step1_desc: "अपने विंडोज बिलिंग पीसी पर डाउनलोड की गई <code>TrengthSuite-Setup.msi</code> फाइल चलाएं। <strong>Welcome to the Trength™ Suite Setup Wizard</strong> स्क्रीन आने पर आगे बढ़ने के लिए <strong>Next &gt;</strong> बटन पर क्लिक करें।",
            inst_step1_callout: "<strong>सुझाव:</strong> इंस्टॉलर चलाने से पहले सुनिश्चित करें कि आप विंडोज एडमिनिस्ट्रेटर अकाउंट से लॉग इन हैं।",

            inst_step2_badge: "चरण 2: फोल्डर और एक्सेस",
            inst_step2_title: "इंस्टॉलेशन फोल्डर और यूजर एक्सेस चुनें",
            inst_step2_desc: "अपनी पसंद का इंस्टॉलेशन पाथ चुनें (डिफ़ॉल्ट: <code>C:\\Program Files (x86)\\Trength Suite\\</code>)। अपनी आवश्यकतानुसार यूजर एक्सेस मोड (<strong>Just me</strong> या <strong>Everyone</strong>) चुनें और <strong>Next &gt;</strong> पर क्लिक करें।",
            inst_step2_callout: "<strong>Everyone</strong> चुनने पर इस पीसी के सभी ऑपरेटर अकाउंट बिना दोबारा इंस्टॉल किए Trength POS का उपयोग कर सकेंगे।",

            inst_step3_badge: "चरण 3: नेटवर्क प्रकार",
            inst_step3_title: "कनेक्शन प्रकार चुनें (वाई-फाई या ईथरनेट)",
            inst_step3_desc: "चुनें कि आपका स्ट्रेंथ सर्वर पीसी स्टोर नेटवर्क से कैसे जुड़ेगा: यदि वायरलेस राउटर का उपयोग कर रहे हैं तो <strong>WIFI</strong> चुनें, या केबल कनेक्शन के लिए <strong>ETHERNET</strong> चुनें। फिर <strong>Next &gt;</strong> दबाएं।",
            inst_step3_callout: "<strong>100% ऑफलाइन लोकल नेटवर्क:</strong> वाई-फाई और ईथरनेट दोनों मोड बिना इंटरनेट या रिचार्ज के 100% ऑफलाइन काम करते हैं।",

            inst_step4_badge: "चरण 4: पुष्टि करें",
            inst_step4_title: "पुष्टि करें और इंस्टॉलेशन शुरू करें",
            inst_step4_desc: "अपनी चुनी हुई सेटिंग्स की जांच करें। विजार्ड सिस्टम फाइलें कॉपी करने और बैकग्राउंड सर्विस रजिस्टर करने के लिए तैयार है। इंस्टॉलेशन शुरू करने के लिए <strong>Next &gt;</strong> दबाएं।",
            inst_step4_callout: "इंस्टॉलर स्वतः ही लोकल डेटाबेस टेबल और नेटवर्क पोर्ट बाइंडिंग कॉन्फ़िगर कर देता है।",

            inst_step5_badge: "चरण 5: UAC सिक्योरिटी परमिशन",
            inst_step5_title: "विंडोज यूजर अकाउंट कंट्रोल (UAC) परमिशन दें",
            inst_step5_desc: "जब विंडोज स्क्रीन पर <strong>User Account Control</strong> प्रॉम्प्ट दिखाई दे (*\"Do you want to allow this app to make changes...\"*), तो <strong>Yes</strong> बटन दबाकर इंस्टॉलेशन की अनुमति दें।",
            inst_step5_callout: "<strong>Yes</strong> पर क्लिक करने से सिस्टम सर्विस को कंप्यूटर चालू होने पर स्वचालित रूप से शुरू होने की प्रशासनिक अनुमति मिल जाती है।",

            // Image Translation Badges for Setup Dialogs (Hindi)
            screen1_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>चित्र 1 का हिंदी अनुवाद:</strong> 'Welcome to the Trength Suite Setup Wizard' - आगे बढ़ने के लिए <strong>Next &gt;</strong> बटन पर क्लिक करें।",
            screen2_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>चित्र 2 का हिंदी अनुवाद:</strong> इंस्टॉलेशन फोल्डर डिफ़ॉल्ट <code>C:\\Program Files (x86)...</code> रहने दें। 'Just me' (केवल आप) या 'Everyone' (सभी यूजर) चुनकर <strong>Next &gt;</strong> दबाएं।",
            screen3_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>चित्र 3 का हिंदी अनुवाद:</strong> स्टोर नेटवर्क प्रकार - वायरलेस वाई-फाई के लिए <strong>WIFI</strong> या केबल कनेक्शन के लिए <strong>ETHERNET</strong> चुनकर <strong>Next &gt;</strong> दबाएं।",
            screen4_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>चित्र 4 का हिंदी अनुवाद:</strong> 'Confirm Installation' - इंस्टॉलेशन शुरू करने के लिए <strong>Next &gt;</strong> पर क्लिक करें।",
            screen5_hi_trans: "<i class=\"bi bi-translate text-primary me-2\"></i><strong>चित्र 5 का हिंदी अनुवाद:</strong> विंडोज यूजर अकाउंट कंट्रोल (UAC) प्रॉम्प्ट - सिस्टम अनुमति देने के लिए <strong>Yes</strong> (हाँ) बटन दबाएं।",

            // Prerequisites & Phase Titles (Hindi)
            inst_prereq_title: "सिस्टम की आवश्यकताएं और हार्डवेयर आवश्यकताएं",
            inst_os_label: "ऑपरेटिंग सिस्टम:",
            inst_os_val: "विंडोज 10 / 11 (64-बिट) या विंडोज सर्वर",
            inst_cpu_label: "प्रोसेसर:",
            inst_cpu_val: "इंटेल कोर i3 / एएमडी रायजन 3 या उच्च",
            inst_ram_label: "रैम:",
            inst_ram_val: "4 GB न्यूनतम (मल्टी-काउंटर POS के लिए 8 GB अनुशंसित)",
            inst_storage_label: "स्टोरेज:",
            inst_storage_val: "डेटाबेस कैश के लिए 500 MB फ्री SSD/HDD स्पेस",
            inst_priv_label: "अनुमति (Privileges):",
            inst_priv_val: "विंडोज लोकल एडमिनिस्ट्रेटर अकाउंट",
            inst_net_label: "नेटवर्क:",
            inst_net_val: "स्टैटिक लोकल सबनेट के साथ वाई-फाई या ईथरनेट LAN",

            inst_phase2_title: "चरण 2: सिस्टम रीस्टार्ट और सर्विस सत्यापन",
            inst_phase2_step_title: "स्टेप 3 & 4: वर्कस्टेशन रीस्टार्ट करें और सिस्टम ट्रे आइकन जांचें",
            inst_phase2_desc: "सेटअप पूरा होने के बाद, अपना कंप्यूटर रीस्टार्ट करें। रीस्टार्ट करने से विंडोज सिस्टम सर्विस को बैकग्राउंड में शुरू होने की अनुमति मिलती है।",
            inst_tray_box_title: "स्ट्रेंथ ट्रे मॉनिटर ढूंढना:",
            inst_tray_step1: "अपनी स्क्रीन के नीचे-दाएं कोने (तारीख और घड़ी के पास) में जाएं।",
            inst_tray_step2: "ओवरफ्लो ट्रे देखने के लिए छोटे ऊपर की ओर तीर <strong>^</strong> पर क्लिक करें।",
            inst_tray_step3: "सत्यापित करें कि स्वर्णिम <strong>Trength \"त्र\" आइकन</strong> सक्रिय है।",

            inst_th_menu_item: "मेन्यू आइटम",
            inst_th_function: "कार्य / विवरण",
            inst_menu_launch_desc: "मुख्य ज्वेलरी POS एप्लीकेशन और बिलिंग कंसोल खोलता है।",
            inst_menu_conn_desc: "लोकल नेटवर्क स्थिति, क्लाउड सिंक कनेक्शन और डेटाबेस स्वास्थ्य की जांच करता है।",
            inst_menu_update_desc: "नवीनतम जीएसटी दरें, बुलियन धातु मूल्य और सॉफ़्टवेयर अपडेट प्राप्त करता है।",
            inst_menu_cmd_desc: "सर्विस रीस्टार्ट करने, नेटवर्क पोर्ट जांचने और मोबाइल डिवाइस पेयर करने की प्रशासनिक सुविधा।",

            inst_phase3_title: "चरण 3: स्टोर नेटवर्क कॉन्फ़िगरेशन और परीक्षण",
            inst_phase3_step_title: "स्टेप 5 & 6: स्टोर नेटवर्क कॉन्फ़िगर करें और कनेक्टिविटी टेस्ट चलाएं",
            inst_phase3_desc: "स्ट्रेंथ रिटेल विश्वसनीयता के लिए डिज़ाइन किया गया है। यह ऑफलाइन (काउंटर बिलिंग) और डिवाइस सिंक (टैबलेट बिलिंग) दोनों तरह से काम करता है।",
            inst_wifi_box_title: "वाई-फाई नेटवर्क सेटअप",
            inst_wifi_box_desc: "वर्कस्टेशन को अपने शोरूम वाई-फाई से जोड़ें। सुनिश्चित करें कि आपके राउटर पर AP आइसोलेशन बंद है ताकि मोबाइल उपकरण कनेक्ट हो सकें।",
            inst_eth_box_title: "वायर्ड LAN (ईथरनेट)",
            inst_eth_box_desc: "मुख्य कैशियर काउंटर के लिए ईथरनेट केबल का उपयोग करने की सलाह दी जाती है ताकि बिल प्रिंटिंग और रियल-टाइम काउंटर सिंकिंग बिना किसी रुकावट के हो।",

            inst_diag_title: "कनेक्टिविटी डायग्नोस्टिक्स चलाना:",
            inst_diag_step1: "गोल्डन <strong>Trength ट्रे आइकन</strong> पर राइट-क्लिक करें।",
            inst_diag_step2: "मेन्यू में से <strong>Check Connectivity</strong> चुनें।",
            inst_diag_step3: "स्क्रीन पर <strong>\"Success: Network & Database Services Active\"</strong> का हरा मैसेज दिखाई देगा।",

            inst_phase4_title: "चरण 4: स्ट्रेंथ खोलना और पहली बार लॉगिन",
            inst_phase4_step_title: "स्टेप 8 & 9: एप्लीकेशन खोलें और स्टोर क्रेडेंशियल दर्ज करें",
            inst_login_check_title: "पहली बार लॉगिन चेकलिस्ट:",
            inst_login_item1: "<strong>स्टोर / ब्रांच आईडी:</strong> इंस्टॉलेशन कोड सत्यापन से स्वतः भरा हुआ।",
            inst_login_item2: "<strong>ऑपरेटर यूजरनेम और पासवर्ड:</strong> अपने ऑनबोर्डिंग ईमेल में दिए गए एडमिनिस्ट्रेटर क्रेडेंशियल दर्ज करें।",
            inst_login_item3: "<strong>बिलिंग काउंटर:</strong> अपना निर्धारित काउंटर चुनें (उदा. <em>Counter 01 - Gold Ornaments</em>)।",
            inst_login_item4: "मुख्य डैशबोर्ड में प्रवेश करने के लिए <strong>Sign In</strong> पर क्लिक करें। दैनिक सोने-चांदी के भाव स्वतः लोड हो जाएंगे।",

            btn_zoom_image: "🔍 पूरा स्क्रीनशॉट देखें (Full Screen Zoom)",
            btn_zoom_hint: "बड़ा देखने के लिए चित्र पर क्लिक करें",
            support_title: "एंटरप्राइज़ सहायता और ऑनबोर्डिंग सपोर्ट:",
            support_desc: "दुकान का नेटवर्क सेटअप करने या टैबलेट बिलिंग शुरू करने में सहायता चाहिए? हमारी तकनीकी टीम से <a href=\"mailto:support@trength.in\" class=\"fw-bold\">support@trength.in</a> पर संपर्क करें या हमारे आधिकारिक पोर्टल <a href=\"https://trength.in\" target=\"_blank\" class=\"fw-bold\">https://trength.in</a> पर जाएं।"
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
                        <span class="text-muted fs-8"><i class="bi bi-info-circle me-1"></i>Trength™ Retail Suite</span>
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