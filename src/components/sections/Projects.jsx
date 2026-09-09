import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { 
  FaReact, FaPython, FaAws, FaGithub, FaFigma, FaHtml5, FaCss3Alt, 
  FaTelegramPlane, FaFacebook, FaMicrochip, FaDatabase, FaServer, FaRobot,
  FaMobileAlt, FaFileWord, FaCogs, FaNetworkWired, FaProjectDiagram
} from 'react-icons/fa'
import { 
  SiSupabase, SiExpo, SiMysql, SiRaspberrypi, SiArduino, 
  SiJavascript, SiBinance, SiThreedotjs, SiGooglesheets 
} from 'react-icons/si'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  
  // เพิ่ม State สำหรับจัดการรูปที่ถูกกดขยาย
  const [zoomedImage, setZoomedImage] = useState(null)
  
  const categories = ['All', 'Hardware & IoT', 'Web & Mobile App', 'AI & Automation', 'Software & System']

  const imgBaseUrl = 'https://ycvrqcrekarkhxtainkd.supabase.co/storage/v1/object/public/portfolio-images'

  const projectsData = [
    {
      id: 1,
      title: 'RailGo - Railway Ticketing Mobile Application',
      category: 'Web & Mobile App',
      role: 'Database & Backend Developer (และมีส่วนร่วมในกระบวนการ Build Application)',
      techStack: ['React Native', 'Expo', 'Supabase', 'Figma'],
      techStackText: 'React Native, Expo (EAS Build), Supabase (PostgreSQL), Figma',
      actionLinks: [
        { type: 'code', label: 'Code', url: 'https://github.com/Abasdrun' },
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '400px',
      image: `${imgBaseUrl}/project-1-railgo/cover.png`,
      overview: 'แอปพลิเคชันสำหรับจองตั๋วรถไฟและติดตามการเดินทาง ที่ออกแบบมาเพื่อแก้ปัญหาความกังวลของผู้โดยสารรถไฟทางไกลที่กลัวนั่งเลยสถานีปลายทางจนไม่อาจหลับพักผ่อนได้สนิท ตัวแอปมีจุดเด่นเรื่องการเลือกที่นั่งผ่านผังรูปแบบ Visual คล้ายการจองตั๋วโรงหนัง และระบบแจ้งเตือนตามพิกัดจริง (Location-based Alarm) เพื่อปลุกล่วงหน้าก่อนถึงสถานีเป้าหมาย',
      keyFeatures: [
        'Database Architecture: ออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์ (Relational Database) โดยใช้ Supabase ซึ่งรันบน PostgreSQL เพื่อรองรับความสัมพันธ์ของข้อมูลในระบบจองตั๋วรถไฟ',
        'Schema Design: สร้างและจัดการตารางข้อมูลหลักที่สำคัญต่อระบบ เช่น ข้อมูลผู้ใช้งาน (profiles), การทำรายการจอง (bookings), รอบการเดินรถ (trips), ข้อมูลขบวนรถและสถานี (trains, stations), ตู้โดยสารและผังที่นั่ง (carriages, seats) รวมไปถึงระบบการแจ้งเตือน (notifications)',
        'Cross-functional Integration: นำอินไซต์จากกระบวนการทำ UX Research (Persona, Empathy Map) และ High-Fidelity Prototype มาวิเคราะห์เพื่อออกแบบ Database ให้รองรับฟีเจอร์หลักของระบบ เช่น การติดตามพิกัดแบบเรียลไทม์',
        'Deployment & Testing: ดำเนินการคอมไพล์โค้ด React Native ผ่าน EAS (Expo Application Services) ให้ออกมาเป็นไฟล์ APK แบบ Standalone เพื่อนำไปติดตั้งและทำ User Acceptance Testing (UAT) บนสมาร์ทโฟนจริง'
      ],
      outcome: 'ได้แอปพลิเคชันที่สามารถติดตั้งและทดสอบการใช้งานจริงบนระบบปฏิบัติการ Android ได้ พร้อมโครงสร้าง Backend ที่แข็งแรง สามารถรองรับข้อมูลการเดินรถและจัดการสถานะที่นั่งได้อย่างมีประสิทธิภาพ',
      gallery: [
        { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }, 
        { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      ]
    },
    {
      id: 2,
      title: 'Smart Auto-Schedule Planner (AI-Powered Registration System)',
      category: 'Web & Mobile App',
      role: 'Data Engineer & Quality Assurance (QA)',
      techStack: ['React Native', 'Python', 'Supabase', 'Figma'],
      techStackText: 'React Native, Python, Supabase, Figma, Constraint Satisfaction Algorithm',
      actionLinks: [
        { type: 'code', label: 'Code', url: 'https://github.com/Abasdrun' },
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '320px',
      image: `${imgBaseUrl}/project-2-schedule/cover.png`,
      overview: 'แอปพลิเคชันจำลองการลงทะเบียนเรียนที่เกิดจากการทำ UX Research และการสัมภาษณ์ผู้ใช้งานเพื่อค้นหา Pain Point อย่างแท้จริง นำมาสู่การพัฒนาระบบ AI Auto-Scheduler ที่ช่วยจัดตารางเรียนอัตโนมัติ รวมถึงฟีเจอร์ลงทะเบียนยกภาคแผน (Batch Registration) และระบบหา Section สำรองเมื่อที่นั่งเต็ม เพื่อลดภาระทางความคิด (Cognitive Load) ของนักศึกษา',
      keyFeatures: [
        'Data Architecture & Pipeline: ออกแบบโครงสร้างฐานข้อมูลบน Supabase โดยแบ่งเป็น 4 Core Modules หลัก ได้แก่ Master Data, Curriculum, Class Operations และ Enrollment',
        'AI Engine Data Preparation: พัฒนาระบบกรองข้อมูลและเตรียม Data Pipeline (Data Transformation) เช่น การจัดกลุ่มวิชาเรียนตามวัน (Day Map) เพื่อส่งต่อข้อมูลที่มีประสิทธิภาพให้กับ Python Backend ประมวลผล',
        'Constraint Satisfaction Implementation: มีส่วนร่วมในการออกแบบตรรกะเบื้องหลังระบบ AI Scheduler โดยประยุกต์ใช้แนวคิด Constraint Satisfaction Algorithm ในการเขียนสมการตรวจสอบเวลาทับซ้อน (Overlap Logic)',
        'System Optimization & QA: วางขอบเขตและข้อจำกัดของการคำนวณ (Limiters) เช่น จำกัดการประมวลผลสูงสุดที่ 10 แผนการเรียน เพื่อป้องกันปัญหา Combinatorial Explosion'
      ],
      outcome: 'ได้แอปพลิเคชันต้นแบบที่สามารถประมวลผลและนำเสนอทางเลือกตารางเรียนที่ไม่ทับซ้อนกันได้ 3-5 รูปแบบทันที พร้อมระบบจัดการฐานข้อมูลที่มีความเสถียร รองรับเงื่อนไขรายวิชาที่ซับซ้อนได้ตรงตามความต้องการของผู้ใช้งานจริง',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-2-schedule/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-2-schedule/detail-2.png` }
      ]
    },
    {
      id: 3,
      title: 'Autonomous Line Tracking Robot',
      category: 'Hardware & IoT',
      role: 'Logic Gate & Digital Circuit Designer',
      techStack: ['Hardware'],
      techStackText: 'Digital Logic ICs (74HC04, 74HC08, 74HC32), Tinkercad Simulation, Karnaugh Map (K-Map), Breadboard',
      actionLinks: [
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '350px',
      image: `${imgBaseUrl}/project-3-robot/cover.png`,
      overview: 'โปรเจ็คพัฒนากลไกหุ่นยนต์เดินตามเส้นอัตโนมัติที่เน้นการลงมือปฏิบัติจริงกับฮาร์ดแวร์ โดยไม่ได้ใช้ Microcontroller ในการประมวลผล แต่ใช้การออกแบบวงจรตรรกะดิจิทัล (Digital Logic Circuit) เพื่อรับสัญญาณจากเซนเซอร์และสั่งการขับเคลื่อนมอเตอร์โดยตรง',
      keyFeatures: [
        'Digital Logic Design: ออกแบบตารางค่าความจริง (Truth Table) จำนวน 32 สถานะ เพื่อรับค่า Input 5 พอร์ตจาก IR Sensor แปลงเป็น Output 2 พอร์ต สำหรับควบคุมมอเตอร์ซ้ายและขวา',
        'Boolean Simplification: ทำการลดรูปสมการลอจิกที่ซับซ้อนด้วยเทคนิค Karnaugh Map (K-Map) จนได้สมการที่สั้นและทำงานได้มีประสิทธิภาพที่สุด',
        'Virtual Prototyping: จำลองและทดสอบการทำงานของวงจรลอจิกเกตทั้งหมดผ่านโปรแกรม Tinkercad ก่อนลงมือประกอบจริง',
        'Hardware Implementation: ลงมือต่อวงจรจริงบน Breadboard โดยใช้ IC พื้นฐาน ได้แก่ NOT Gate (74HC04), AND Gate (74HC08) และ OR Gate (74HC32)'
      ],
      outcome: 'ได้หุ่นยนต์เดินตามเส้นที่สามารถทำงานได้จริงผ่านการประมวลผลระดับฮาร์ดแวร์ แสดงให้เห็นถึงความเข้าใจอย่างลึกซึ้งในรากฐานของ Digital System Design และทักษะการแก้ปัญหาฮาร์ดแวร์ (Troubleshooting) หน้างานจากการลองผิดลองถูก',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-3-robot/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-3-robot/detail-2.png` }
      ]
    },
    {
      id: 4,
      title: 'IoT Automated Wolffia Smart Farming System',
      category: 'Hardware & IoT',
      role: 'Full-Stack IoT Developer & Hardware Engineer',
      techStack: ['ESP32', 'C/C++', 'Arduino', 'MQTT', 'ThingsBoard', 'Hardware'],
      techStackText: 'ESP32, C/C++ (Arduino), MQTT Protocol, ThingsBoard (Cloud Platform), EasyEDA (PCB Design), Sensors (TDS, pH, DS18B20), Actuators (Relays, Water Pumps, DC Motors)',
      actionLinks: [
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '420px',
      image: `${imgBaseUrl}/project-4-wolffia/cover.png`,
      overview: 'ระบบสมาร์ทฟาร์มอัตโนมัติสำหรับเพาะเลี้ยง "ผำ" (Wolffia) พืชน้ำขนาดจิ๋วที่มีคุณค่าทางอาหารสูง โปรเจ็คนี้ถูกคิดค้นขึ้นเพื่อแก้ปัญหาความยุ่งยากในการควบคุมคุณภาพน้ำ โดยนำเทคโนโลยี IoT มาใช้ในการตรวจวัดสภาพแวดล้อมแบบเรียลไทม์ และสั่งการระบบปั๊มน้ำ กรองน้ำ รวมถึงเติมสารอาหารอัตโนมัติ',
      keyFeatures: [
        'Hardware & Custom PCB Design: ออกแบบลายวงจรพิมพ์ (PCB) ของระบบชุดควบคุมด้วยตัวเองผ่านโปรแกรม EasyEDA จัดการสั่งผลิต และลงมือบัดกรีประกอบอุปกรณ์',
        'Embedded System Programming & Control Logic: พัฒนาซอฟต์แวร์บน ESP32 เพื่อรับข้อมูลจากเซนเซอร์ (DS18B20, pH, TDS) และเขียนตรรกะควบคุมอัตโนมัติ',
        'IoT Architecture & Cloud Integration: เชื่อมต่อ ESP32 เข้ากับแพลตฟอร์ม ThingsBoard ผ่านโปรโตคอล MQTT เพื่อส่งข้อมูลเซนเซอร์ขึ้นไปแสดงผลบน Dashboard',
        'Remote RPC Control: พัฒนาระบบรับคำสั่งจาก Cloud (RPC Callback) เพื่อให้ผู้ใช้งานสามารถกดปุ่มสั่งการเปิด-ปิดระบบกรองน้ำจากระยะไกลได้'
      ],
      outcome: 'ได้ระบบสมาร์ทฟาร์มต้นแบบที่ทำงานได้จริงและเสถียร ครบถ้วนทั้งฮาร์ดแวร์ที่ออกแบบมาโดยเฉพาะ และระบบคลาวด์ที่ตรวจสอบได้ตลอดเวลา',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-4-wolffia/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-4-wolffia/detail-2.png` },
        { type: 'image', url: `${imgBaseUrl}/project-4-wolffia/detail-3.png` }
      ]
    },
    {
      id: 5,
      title: 'Automated Binance Trading Bot',
      category: 'AI & Automation',
      role: 'Automation Developer, Algorithmic Trader & Full-Stack Developer',
      techStack: ['AWS', 'Binance', 'Telegram', 'Python', 'React Native', 'Expo', 'Supabase', 'Figma'],
      techStackText: 'Python (ccxt, pandas, pandas-ta), FastAPI, React Native (Expo), Supabase (PostgreSQL), AWS (EC2), PM2, Binance API, Telegram Bot API',
      actionLinks: [
        { type: 'private', label: 'Code', url: '#' }
      ],
      height: '320px',
      image: `${imgBaseUrl}/project-5-binance/cover.png`,
      overview: 'ระบบเทรดคริปโตเคอร์เรนซีอัตโนมัติบนกระดาน Binance ที่รวบรวมแผนการลงทุน (Trading Strategy) แบบ 100% Emotionless ยกระดับระบบจากสคริปต์เทรดพื้นฐาน สู่การเป็น Full-Stack System อย่างเต็มรูปแบบ นำระบบรันบนเซิร์ฟเวอร์ AWS (24/7 Uptime) ทำงานร่วมกับฐานข้อมูล Cloud และเชื่อมต่อ Mobile Dashboard Application',
      keyFeatures: [
        'Algorithmic Trading & Risk Management: เขียนลอจิกวิเคราะห์กราฟด้วย pandas-ta (RSI) เพื่อหาจุดเข้าซื้อที่แม่นยำ พร้อมระบบถัวเฉลี่ยต้นทุนอัตโนมัติ (DCA), ระบบล็อกกำไร (Trailing Stop) และจุดตัดขาดทุน (Hard Stop Loss)',
        'Full-Stack Mobile Dashboard: พัฒนาแอปพลิเคชันบนมือถือด้วย React Native แสดงผล PnL, Win Rate และกราฟพอร์ต โดยเชื่อมต่อผ่าน Custom API (FastAPI)',
        'Atomic State Management: ย้ายระบบจัดเก็บข้อมูลขึ้นสู่ฐานข้อมูล Supabase (PostgreSQL) จัดการ Atomic Update การทำธุรกรรมกระเป๋าเงินจำลอง',
        'Cloud Deployment & Real-time Alert: วางระบบรันบน AWS EC2 และใช้ไลบรารี pm2 พร้อมแจ้งเตือนทุกจังหวะการ Action ผ่าน Telegram Bot'
      ],
      outcome: 'ได้ระบบเทรดอัตโนมัติที่มีความเสถียรระดับ Financial Grade ช่วยกำจัดอารมณ์ความรู้สึกในการเทรด (Emotionless Trading) ตัวระบบทนทานต่อข้อผิดพลาด (Fault-Tolerant) และสะท้อนให้เห็นทักษะการพัฒนาระบบครบวงจร',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-5-binance/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-5-binance/detail-2.png` },
        { type: 'image', url: `${imgBaseUrl}/project-5-binance/detail-3.png` }
      ]
    },
    {
      id: 6,
      title: 'Smart Plug with Environmental Monitoring (IoT Smart Home)',
      category: 'Hardware & IoT',
      role: 'IoT Developer & Hardware Designer',
      techStack: ['ESP32', 'C/C++', 'Hardware', 'MQTT', 'Blynk'],
      techStackText: 'ESP32, C/C++ (Arduino IDE), Blynk App, MQTT, LINE Notify API, Google Assistant API, เซนเซอร์ DHT22 (วัดอุณหภูมิ/ความชื้น), Relay, HLK-5M05 (Step-down), PCB & 3D Design Tools',
      actionLinks: [
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '360px',
      image: `${imgBaseUrl}/project-6-plug/cover.png`,
      overview: 'โปรเจ็คพัฒนานวัตกรรมปลั๊กไฟอัจฉริยะ (Smart Plug) ในช่วงปี 1 ที่ออกแบบมาเพื่อเปลี่ยนเครื่องใช้ไฟฟ้าธรรมดาให้กลายเป็นอุปกรณ์ Smart Home สามารถควบคุมการเปิด-ปิดได้จากระยะไกลผ่านสมาร์ทโฟนและคำสั่งเสียง พร้อมระบบเซนเซอร์ตรวจวัดสภาพแวดล้อมและระบบตัดไฟอัตโนมัติเมื่ออุณหภูมิสูงผิดปกติเพื่อป้องกันอัคคีภัย',
      keyFeatures: [
        'Hardware Assembly & PCB/3D Design: นำอุปกรณ์สำเร็จรูปมาออกแบบลายวงจร (PCB) ใช้โมดูลแปลงไฟ HLK-5M05 เพื่อลดแรงดันไฟ 220V AC เป็น 5V DC เลี้ยงวงจร พร้อมออกแบบโมเดล 3D สำหรับเคสครอบอุปกรณ์',
        'Smart Control & Voice Command: พัฒนาซอฟต์แวร์บน ESP32 และเชื่อมต่อผ่านโปรโตคอล MQTT / แอปพลิเคชัน Blynk รวมถึงรองรับการสั่งงานด้วยเสียง (Voice Control) ผ่าน Google Assistant',
        'Safety Automation & Alert System: ออกแบบระบบความปลอดภัย (Fail-safe) หากอุณหภูมิสูงเกินกำหนด ระบบจะสั่งตัดการทำงานของรีเลย์ทันที พร้อมยิง API แจ้งเตือนสถานะอันตรายไปยัง LINE Notify'
      ],
      outcome: 'ได้ชิ้นงานปลั๊กไฟอัจฉริยะต้นแบบที่ใช้งานได้จริงและมีความปลอดภัยสูง ถือเป็นโปรเจ็คที่ช่วยปูรากฐานความเข้าใจที่แข็งแกร่งในสถาปัตยกรรมระบบ IoT และการบูรณาการฮาร์ดแวร์เข้ากับซอฟต์แวร์',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-6-plug/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-6-plug/detail-2.png` }
      ]
    },
    {
      id: 7,
      title: 'Coffee Beans Database Management System',
      category: 'Software & System',
      role: 'Database Designer & Python Developer',
      techStack: ['SQL', 'MySQL', 'Python'],
      techStackText: 'MySQL, Python (Tkinter), Relational Database Design, ER-Diagram, Data Dictionary',
      actionLinks: [
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '380px',
      image: `${imgBaseUrl}/project-7-coffee/cover.png`,
      overview: 'โปรเจ็คพัฒนาระบบจัดการฐานข้อมูลสำหรับธุรกิจร้านเมล็ดกาแฟ โดยเน้นการออกแบบสถาปัตยกรรมข้อมูล (Data Architecture) ตั้งแต่การวิเคราะห์ความต้องการทางธุรกิจ การออกแบบโครงสร้างความสัมพันธ์ ไปจนถึงการเขียนโปรแกรม GUI เพื่อใช้จำลองการจัดการและเก็บข้อมูลได้จริงตามมาตรฐานฐานข้อมูลเชิงสัมพันธ์',
      keyFeatures: [
        'Database Modeling & Design: วิเคราะห์และออกแบบฐานข้อมูลโดยกำหนด Entity, Attribute และสร้างความสัมพันธ์ (Relationship) แบบ 1:N และ M:N',
        'ER-Diagram & Schema Mapping: จัดทำ ER-Diagram และแปลงโครงสร้างเป็น Relational Tables ครอบคลุมระบบงานหลัก เช่น ข้อมูลพนักงาน, ลูกค้า, คลังเมล็ดกาแฟ, ผู้จัดหา, ใบสั่งซื้อ และใบเสร็จ',
        'Data Dictionary & Integrity: จัดทำพจนานุกรมข้อมูล (Data Dictionary) จัดการ Primary Key (PK) และ Foreign Key (FK) เพื่อรักษาความถูกต้องของข้อมูล',
        'GUI Application Development & Complex SQL: พัฒนาโปรแกรม CRUD ด้วย Python Tkinter เชื่อมต่อ MySQL พร้อมเขียนคำสั่ง SQL ซับซ้อน เช่น การใช้คำสั่ง JOIN ตารางเพื่อออกใบเสร็จ'
      ],
      outcome: 'ได้โครงสร้างฐานข้อมูลที่ได้มาตรฐาน สามารถรองรับการขยายตัวของธุรกิจได้ในอนาคต พร้อมทั้งมีแอปพลิเคชันต้นแบบที่สามารถประมวลผล ดึงข้อมูล และจัดการสต๊อกสินค้าได้อย่างถูกต้องแม่นยำ',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-7-coffee/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-7-coffee/detail-2.png` }
      ]
    },
    {
      id: 8,
      title: 'IT Project Management & System Design: DEC Platform',
      category: 'Software & System',
      role: 'Project Manager (PM) & System Auditor',
      techStack: ['Microsoft Word'],
      techStackText: 'Software Development Life Cycle (SDLC), Requirement Engineering, System Architecture Design, IT Service Management',
      actionLinks: [
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '320px',
      image: `${imgBaseUrl}/project-8-DEC/cover.png`,
      overview: 'โปรเจ็คจำลองกระบวนการวิศวกรรมซอฟต์แวร์ (Software Engineering) แบบเต็มรูปแบบ สำหรับแพลตฟอร์มอีคอมเมิร์ซจัดการโต๊ะคอมพิวเตอร์แบบ 3D โดยโฟกัสที่การบริหารจัดการโครงการและวิเคราะห์ระบบตามมาตรฐานอุตสาหกรรมซอฟต์แวร์จริง ตั้งแต่การตั้งต้นโครงการ การเก็บความต้องการ ไปจนถึงการออกแบบสถาปัตยกรรมระบบ',
      keyFeatures: [
        'Project Management & SOW: รับบทบาท Project Manager (PM) จัดทำเอกสาร Statement of Work (SOW) และวางแผนกระบวนการบริหารการเปลี่ยนแปลง',
        'Requirement Specification Oversight: ควบคุมและตรวจสอบการจัดทำเอกสารความต้องการของระบบ (SRS) ครอบคลุมทั้ง Functional และ Non-functional Requirement',
        'System & Architecture Design: กำกับดูแลการออกแบบสถาปัตยกรรมระบบ, Data Workflow Diagram และออกแบบฐานข้อมูล',
        'Work Process Verification: ทำหน้าที่เป็นผู้ตรวจสอบ (Auditor) ในการประเมินและอนุมัติการออกแบบระบบว่าสอดคล้องกับข้อกำหนดมาตรฐานที่ตั้งไว้หรือไม่'
      ],
      outcome: 'ได้ชุดเอกสารการพัฒนาระบบซอฟต์แวร์ที่ครบถ้วนและเป็นมาตรฐานมืออาชีพ พร้อมส่งมอบให้ทีม Development นำไปพัฒนาต่อได้จริง แสดงให้เห็นถึงมุมมองการบริหารจัดการระบบภาพรวม',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-8-DEC/detail-1.png` }
      ]
    },
    {
      id: 9,
      title: 'Social Media Automation for Affiliate Marketing',
      category: 'AI & Automation',
      role: 'Automation Engineer & Content Publisher',
      techStack: ['Make.com', 'Google AI Studio', 'Google Sheets', 'Facebook', 'Telegram'],
      techStackText: 'Make.com (Integromat), Google AI Studio (Gemini API), Google Sheets, Facebook Page API, Telegram Bot API',
      actionLinks: [
        { type: 'facebook', label: 'Facebook Page', url: 'https://facebook.com' },
        { type: 'make', label: 'Make.com', url: 'https://make.com' }
      ],
      height: '420px',
      image: `${imgBaseUrl}/project-9-affiliate/cover.png`,
      overview: 'ระบบอัตโนมัติสำหรับบริหารจัดการคอนเทนต์บนแฟนเพจ Facebook เพื่อสร้างรายได้จากการโปรโมทสินค้าผ่านระบบ Shopee Affiliate แบบไม่ต้องใช้คนนั่งทำ (Hands-off) โดยร้อยเรียง Workflow ให้ระบบดึงข้อมูลสินค้า คิดแคปชั่นด้วย AI โพสต์ลงเพจตามเวลาที่กำหนด และแจ้งเตือนผลลัพธ์ผ่านมือถือแบบครบวงจร',
      keyFeatures: [
        'Database & Data Pipeline: ประยุกต์ใช้ Google Sheets เป็นฐานข้อมูลหลัก (Centralized Data) ในการจัดเตรียมและรวบรวมข้อมูลสินค้า และลิงก์ Affiliate',
        'AI Content Generation: เชื่อมต่อ API ของ Google AI Studio (Gemini) ให้ AI ประมวลผลและแต่งแคปชั่นรีวิวสินค้าให้ออกมาดูเป็นธรรมชาติ ดึงดูดความสนใจ',
        'Workflow Orchestration: ออกแบบและวางระบบ Pipeline บนแพลตฟอร์ม Make.com ให้ทำงานร่วมกันอย่างไร้รอยต่อ ยิงคำสั่งโพสต์ภาพพร้อมข้อความลง Facebook Page ตามตารางเวลา',
        'Real-time Notification: พัฒนาระบบแจ้งเตือนสถานะการทำงาน เชื่อมต่อกับ Telegram Bot API ส่งข้อความรายงานผลการโพสต์เข้ามือถือทันที'
      ],
      outcome: 'สร้างระบบผลิตรายได้แบบ Passive Income ที่ทำงานแทนคนได้จริง ช่วยประหยัดเวลาในการบริหารจัดการโซเชียลมีเดียได้อย่างมหาศาล และรักษาความสม่ำเสมอในการโพสต์คอนเทนต์ได้อย่างมีประสิทธิภาพ',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-9-affiliate/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-9-affiliate/detail-2.png` }
      ]
    },
    {
      id: 10,
      title: 'LoRaWAN for Industrial Container Tracking',
      category: 'Hardware & IoT',
      role: 'Network Infrastructure Analyst & Project Planner',
      techStack: ['Cisco Packet Tracer', 'Node-RED', 'ThingsBoard', 'Microsoft Word'],
      techStackText: 'LoRaWAN (AS923 Standard), Cisco Infrastructure (Catalyst IR1101, IE3300), ThingsBoard, Node-RED, Network Simulation',
      actionLinks: [
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '350px',
      image: `${imgBaseUrl}/project-10-LoRaWAN/cover.png`,
      overview: 'โครงการออกแบบสถาปัตยกรรมเครือข่ายไร้สายระยะไกลพลังงานต่ำ (LoRaWAN) สำหรับติดตามตู้คอนเทนเนอร์ในพื้นที่ลานวางตู้และเรือบรรทุกสินค้า เพื่อแก้ปัญหาสัญญาณถูกบดบังจากโครงสร้างเหล็ก (Metal Canyon Effect) โปรเจ็คนี้จำลองการทำงานของเครือข่าย และจัดทำเอกสารตามมาตรฐานอุตสาหกรรมจริง',
      keyFeatures: [
        'Network Architecture Design: ออกแบบโครงสร้างเครือข่ายใช้เทคโนโลยีจาก Cisco เป็นแกนหลัก (Catalyst IR1101, IE3300) รองรับการส่งข้อมูลผ่านคลื่นความถี่ AS923',
        'Feasibility & Simulation: จำลองสถานการณ์การส่งสัญญาณของ Tracker ติดตู้คอนเทนเนอร์กว่า 1,000 ใบ รวมถึงจำลองระยะทางและความสูงแนวดิ่ง (Z-Axis) เพื่อพิสูจน์ความเสถียร',
        'Professional Documentation: จัดทำเอกสารโครงการระดับมืออาชีพ ตั้งแต่ Terms of Reference (TOR) การประเมิน Man-Days และรายงานเชิงวิชาการ',
        'IoT Dashboard Simulation: ออกแบบและจำลองหน้าจอ Dashboard ผ่านแพลตฟอร์ม ThingsBoard และ Node-RED แสดงการประมวลผลตำแหน่งตู้คอนเทนเนอร์บนแผนที่'
      ],
      outcome: 'ส่งมอบเอกสารข้อเสนอโครงการ (Proposal) และผลการจำลองเครือข่ายที่มีความสมบูรณ์เทียบเท่าการประมูลงานจริง แสดงให้เห็นถึงความเข้าใจด้าน Enterprise Networking, IoT Infrastructure และกระบวนการ Project Management',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-10-LoRaWAN/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-10-LoRaWAN/detail-2.png` }
      ]
    },
    {
      id: 11,
      title: 'Hydro Smart: Bladeless Hydro Turbine Management System',
      category: 'Hardware & IoT',
      role: 'Full-Stack IoT Developer & System Integrator',
      techStack: ['Raspberry Pi', 'React', 'Python', 'Node-RED', 'MariaDB'],
      techStackText: 'Raspberry Pi (Core Edge Server), ESP32 (Sensor Node), Node-RED, MQTT (Mosquitto Broker), React JS (Vite, Chart.js), MariaDB (MySQL), Python (Linear Regression Model)',
      actionLinks: [
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '320px',
      image: `${imgBaseUrl}/project-11-hydro/cover.png`,
      overview: 'ระบบสารสนเทศเพื่อการจัดการพลังงานชุมชนสำหรับกังหันน้ำผลิตไฟฟ้า รันระบบสภาพแวดล้อมจริง (Production Environment) บนเครือข่ายเซิร์ฟเวอร์ขนาดเล็กด้วย Raspberry Pi ทำหน้าที่รับส่งข้อมูลสถานะการทำงานของกังหันน้ำจากเซนเซอร์มาแสดงผลบน Web Dashboard แบบเรียลไทม์ พร้อมประยุกต์ใช้โมเดลวิเคราะห์ข้อมูลทำนายแนวโน้ม',
      keyFeatures: [
        'Hardware & Edge Computing: นำ Raspberry Pi ประยุกต์ใช้เป็น Edge Server รัน Node-RED และ Mosquitto Broker จัดการข้อมูลที่ส่งมาจาก ESP32',
        'Real-time Web Dashboard: พัฒนา Frontend ด้วย React JS สำหรับมอนิเตอร์ข้อมูลภาพรวมและแผนที่ ดึงค่าพารามิเตอร์ต่างๆ มาแสดงผลผ่านกราฟ Chart.js',
        'Data Pipeline & Database Management: ออกแบบ Flow-based Programming ผ่าน Node-RED รับข้อมูลแพ็กเก็ตจาก MQTT ไปเก็บลงฐานข้อมูล MariaDB',
        'Predictive Analytics (AI Model): สร้างโมเดลพยากรณ์ความต้องการไฟฟ้าด้วยเทคนิค Linear Regression (Python) เพื่อสนับสนุนการตัดสินใจ'
      ],
      outcome: 'ได้ระบบจัดการพลังงานแบบ End-to-End ที่สามารถทำงานได้จริงบนสถาปัตยกรรมฮาร์ดแวร์ Raspberry Pi มีหน้าแดชบอร์ดที่ตอบสนองไว (Responsive) และมีระบบแจ้งเตือนข้อผิดพลาดได้ทันที',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-11-hydro/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-11-hydro/detail-2.png` }
      ]
    },
    {
      id: 12,
      title: '8-Bit CPU Architecture & Instruction Set Design',
      category: 'Hardware & IoT',
      role: 'CPU Architecture Designer & RTL (Verilog) Developer',
      techStack: ['Verilog HDL', 'Xilinx'],
      techStackText: 'Verilog HDL, Xilinx (ISE/Vivado), Digital Logic Design, Instruction Set Architecture (ISA)',
      actionLinks: [
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '360px',
      image: `${imgBaseUrl}/project-12-CPU/cover.png`,
      overview: 'โปรเจ็คออกแบบสถาปัตยกรรมหน่วยประมวลผลกลาง (CPU) ขนาด 8 บิต จำลองการทำงานตั้งแต่ระดับโครงสร้างคำสั่ง (Instruction Set) ไปจนถึงการเขียนโปรแกรมฮาร์ดแวร์เพื่อประมวลผลโจทย์สมการวนลูปให้สามารถประมวลผลได้จริงในระดับ Machine Code',
      keyFeatures: [
        'Custom ISA Design: ออกแบบโครงสร้างชุดคำสั่ง (Instruction Set Architecture) แบบแบ่งเป็น 3 รูปแบบหลัก (R-Format, I-Format, J-Format)',
        'Assembly to Machine Code Translation: แปลง High-level Code ให้เป็นภาษา Assembly ที่ออกแบบขึ้นมาเอง จากนั้นแปลงเป็นรหัสเลขฐานสองบรรจุลง Instruction Memory',
        'Datapath & Control Unit Design: ออกแบบเส้นทางการไหลของข้อมูล (Data Path) และหน่วยควบคุม (Control Path) แสดงสถานะในแต่ละ Instruction Cycle',
        'Hardware Description (Verilog HDL): เขียนโปรแกรมอธิบายโครงสร้างฮาร์ดแวร์ด้วยภาษา Verilog HDL แบ่งเป็นโมดูลย่อยและจำลองการทำงานผ่าน Waveform บน Xilinx'
      ],
      outcome: 'ได้ระบบ CPU 8 บิตจำลองที่สามารถประมวลผลคำสั่งทางคณิตศาสตร์และตรรกะตามสถาปัตยกรรมที่ออกแบบไว้ได้ถูกต้องสมบูรณ์ แสดงให้เห็นถึงความเข้าใจขั้นสูงในโครงสร้างการทำงานของคอมพิวเตอร์และทักษะการออกแบบวงจรดิจิทัล',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-12-CPU/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-12-CPU/detail-2.png` }
      ]
    },
    {
      id: 13,
      title: 'Air-Canvas',
      category: 'AI & Automation',
      role: 'Front-End Developer',
      techStack: ['JavaScript', 'HTML5', 'CSS3'],
      techStackText: 'HTML5, CSS3, Vanilla JavaScript, Google MediaPipe (Hands)',
      actionLinks: [
        { type: 'code', label: 'Code', url: 'https://github.com/Abasdrun' }
      ],
      height: '380px',
      image: `${imgBaseUrl}/project-13-canvas/cover.png`,
      overview: 'เว็บแอปพลิเคชันวาดภาพแบบอินเทอร์แอคทีฟที่เปิดให้ผู้ใช้งานสามารถใช้นิ้วมือวาดรูปกลางอากาศ (Air Drawing) ลงบนหน้าจอได้โดยตรงผ่านกล้องเว็บแคม ประยุกต์ใช้เทคโนโลยี Computer Vision วิเคราะห์ตำแหน่งข้อต่อมือแบบเรียลไทม์บนเบราว์เซอร์ ทำงานแบบ Client-side ทั้งหมด',
      keyFeatures: [
        'Computer Vision Integration: นำไลบรารี MediaPipe Hands ของ Google มาเชื่อมต่อผ่าน JavaScript รับภาพจาก Webcam ประมวลผลโครงสร้างมือ',
        'Gesture-based Drawing Logic: พัฒนาตรรกะวาดภาพบน HTML5 Canvas คำนวณพิกัดปลายนิ้วชี้และนิ้วโป้ง หากระยะห่างน้อยกว่าเกณฑ์ จะถือว่า "จีบนิ้ว" และสั่งวาดเส้น',
        'Interactive UI Tools: สร้างจานสี 7 สี ฟีเจอร์ยางลบ และปุ่มล้างกระดาน โดยให้ผู้ใช้ขยับนิ้วไปแตะพิกัดบนจอเพื่อเปลี่ยนเครื่องมือ',
        'UX/UI Mirror Optimization: ปรับการแสดงผลวิดีโอแบบกระจกเงา (Mirror Effect) ด้วย CSS เพื่อให้ผู้ใช้กะระยะวาดและควบคุมทิศทางได้อย่างเป็นธรรมชาติ'
      ],
      outcome: 'ได้เว็บแอปพลิเคชันที่ทำงานลื่นไหลและตอบสนองต่อท่าทางนิ้วมือได้อย่างแม่นยำ ถือเป็นผลงานที่สะท้อนให้เห็นถึงทักษะการเขียน Front-end ที่ประยุกต์ใช้ไลบรารี AI/Computer Vision ระดับโลกมาสร้างเป็นผลิตภัณฑ์ที่ใช้งานได้จริง',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-13-canvas/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-13-canvas/detail-2.png` }
      ]
    },
    {
      id: 14,
      title: 'Personal Portfolio Website (Interactive UI)',
      category: 'Web & Mobile App',
      role: 'Front-End & Creative Developer',
      techStack: ['React', 'Three.js', 'Supabase'],
      techStackText: 'React, Three.js, React Three Fiber, Supabase Storage, EmailJS',
      actionLinks: [
        { type: 'code', label: 'Code', url: 'https://github.com/Abasdrun' },
        { type: 'document', label: 'Document', url: 'https://docs.google.com' }
      ],
      height: '320px',
      image: `${imgBaseUrl}/project-14-Port/cover.png`,
      overview: 'เว็บไซต์พอร์ตโฟลิโอส่วนตัวแบบ 3D Sci-Fi Interactive ที่พัฒนาขึ้นเพื่อนำเสนอผลงานและเกียรติบัตรอย่างเป็นระบบ โดยผสานเทคโนโลยี Web 3D เข้ากับการจัดการข้อมูลบน Cloud Storage เพื่อประสิทธิภาพสูงสุด',
      keyFeatures: [
        '3D Web Environment: สร้างสภาพแวดล้อมอวกาศ 3 มิติ ด้วย React Three Fiber และ Drei พร้อมควบคุมมุมกล้องด้วย ScrollControls',
        'Cloud Storage Integration: จัดการรูปภาพ Assets ทั้งหมดผ่าน Supabase (Public Buckets) ลดภาระขนาดไฟล์ของ Source Code และช่วยให้โหลดเว็บได้รวดเร็ว',
        'EmailJS Contact Service: ผูกระบบติดต่อสอบถามผ่าน EmailJS ให้ผู้เข้าชมสามารถส่งอีเมลตรงจากหน้าเว็บได้ทันทีโดยไม่ต้องผ่าน Backend',
        'Responsive & Cross-platform: พัฒนาโค้ด CSS Media Queries ให้รองรับการแสดงผลทุกหน้าจอได้อย่างสมบูรณ์แบบ'
      ],
      outcome: 'ได้เว็บไซต์พอร์ตโฟลิโอที่ดูทันสมัย เป็นเอกลักษณ์ สร้างความประทับใจตั้งแต่แรกเห็น (First Impression) และแสดงศักยภาพการเขียนโค้ด React ขั้นสูงที่สามารถจัดการกับ 3D Rendering ได้อย่างไหลลื่น',
      gallery: [
        { type: 'image', url: `${imgBaseUrl}/project-14-Port/detail-1.png` },
        { type: 'image', url: `${imgBaseUrl}/project-14-Port/detail-2.png` }
      ]
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter)

  const leftColumnProjects = filteredProjects.filter((_, index) => index % 2 === 0)
  const rightColumnProjects = filteredProjects.filter((_, index) => index % 2 !== 0)

  const sectionRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
        else setIsVisible(false) 
      },
      { threshold: 0.02 } 
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const popIn3D = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'perspective(1500px) translateY(0px) rotateX(0deg) scale(1)' 
      : 'perspective(1500px) translateY(80px) rotateX(10deg) scale(0.95)',
    transition: `transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s, opacity 0.8s ease ${delay}s`,
  })

  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedProject(null)
    }
  }

  const ProjectCard = ({ project, index }) => (
    <div 
      className="proj-card"
      onClick={() => setSelectedProject(project)}
      style={{ 
        width: '100%',
        height: project.height, 
        ...popIn3D(0.15 + (index * 0.04)) 
      }}
    >
      <div 
        className="proj-img-placeholder"
        style={{ 
          width: '100%', height: '100%', 
          background: project.image ? `url('${project.image}') center/cover` : 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          transition: 'transform 0.5s ease',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
      >
        {!project.image && <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>Awaiting Cover Image</span>}
      </div>
      
      <div className="proj-info-overlay">
        <div>
          <span style={{ color: '#00ddff', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {project.category}
          </span>
          <h3 className="card-title">
            {project.title}
          </h3>
        </div>
        <div className="view-details-btn">
          <span>Read case study</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  )

  const getTechIcon = (tech) => {
    const t = tech.toLowerCase()
    if (t.includes('react')) return <FaReact color="#61DAFB" size={16} />
    if (t.includes('expo')) return <SiExpo color="#ffffff" size={16} />
    if (t.includes('supabase')) return <SiSupabase color="#3ECF8E" size={16} />
    if (t.includes('figma')) return <FaFigma color="#F24E1E" size={16} />
    if (t.includes('python') || t.includes('fastapi')) return <FaPython color="#3776AB" size={16} />
    if (t.includes('aws')) return <FaAws color="#FF9900" size={16} />
    if (t.includes('mysql') || t.includes('mariadb')) return <SiMysql color="#4479A1" size={16} />
    if (t.includes('sql') || t.includes('database')) return <FaDatabase color="#ffffff" size={16} />
    if (t.includes('c/c++')) return <span style={{ color: '#9b59b6', fontWeight: 'bold', fontSize: '13px' }}>C++</span> 
    if (t.includes('arduino')) return <SiArduino color="#00979D" size={16} />
    if (t.includes('esp32')) return <FaMicrochip color="#E7352C" size={16} /> 
    if (t.includes('mqtt')) return <FaNetworkWired color="#660066" size={16} />
    if (t.includes('raspberry')) return <SiRaspberrypi color="#C51A4A" size={16} />
    if (t.includes('html')) return <FaHtml5 color="#E34F26" size={16} />
    if (t.includes('css')) return <FaCss3Alt color="#1572B6" size={16} />
    if (t.includes('javascript') || t.includes('algorithm') || t.includes('logic')) return <SiJavascript color="#F7DF1E" size={16} />
    if (t.includes('telegram')) return <FaTelegramPlane color="#26A5E4" size={16} />
    if (t.includes('facebook')) return <FaFacebook color="#1877F2" size={16} />
    if (t.includes('cisco')) return <FaNetworkWired color="#1BA0D7" size={16} />
    if (t.includes('node-red')) return <FaProjectDiagram color="#8F0000" size={16} />
    if (t.includes('binance')) return <SiBinance color="#F3BA2F" size={16} />
    if (t.includes('thingsboard')) return <FaServer color="#5A7D9A" size={16} />
    if (t.includes('hardware')) return <FaMicrochip color="#ffffff" size={16} />
    if (t.includes('blynk')) return <FaMobileAlt color="#15B86C" size={16} />
    if (t.includes('word')) return <FaFileWord color="#2B579A" size={16} />
    if (t.includes('make.com')) return <FaCogs color="#7132F5" size={16} /> 
    if (t.includes('ai studio')) return <FaRobot color="#ffffff" size={16} /> 
    if (t.includes('sheet')) return <SiGooglesheets color="#34A853" size={16} />
    if (t.includes('mariadb')) return <FaDatabase color="#ffffff" size={16} />
    if (t.includes('verilog')) return <FaMicrochip color="#00599C" size={16} /> 
    if (t.includes('xilinx')) return <span style={{color: '#E7352C', fontWeight: 'bold', fontSize: '13px'}}>{`</>`}</span> 
    if (t.includes('three.js')) return <SiThreedotjs color="#ffffff" size={16} />

    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ddff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 18 2 12 8 6"></polyline><polyline points="16 6 22 12 16 18"></polyline></svg>
  }

  const detailModal = selectedProject ? (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="project-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
        
        <div className="modal-img-container">
          <img src={selectedProject.image} alt={selectedProject.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450/141824/00ddff?text=Cover+Image' }} />
        </div>

        <div className="modal-details">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
            <span className="modal-category" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedProject.category}</span>
          </div>

          <h2 className="modal-title">{selectedProject.title}</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px', marginBottom: '35px' }}>
            {selectedProject.techStack.map((tech, i) => (
              <div key={i} className="tech-pill">
                {getTechIcon(tech)}
                <span>{tech}</span>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', marginBottom: '10px' }}>Role</h3>
            <p style={{ color: '#8892b0', fontSize: '1.05rem', margin: 0 }}>{selectedProject.role}</p>
          </div>

          <div style={{ marginBottom: '35px' }}>
            <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', marginBottom: '10px' }}>Tech Stack</h3>
            <p style={{ color: '#8892b0', fontSize: '1.05rem', margin: 0, lineHeight: '1.6' }}>{selectedProject.techStackText}</p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', marginBottom: '10px' }}>Overview</h3>
            <p className="modal-desc">{selectedProject.overview}</p>
          </div>

          <div style={{ margin: '20px 0' }}>
            <h3 style={{ color: 'white', margin: '0 0 15px 0', fontSize: '1.4rem', fontWeight: '700' }}>Key Contributions & Features</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#8892b0', lineHeight: '1.8', fontSize: '1rem' }}>
              {selectedProject.keyFeatures.map((feat, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>{feat}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '40px', marginTop: '10px' }}>
            <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '1.4rem', fontWeight: '700' }}>Outcome</h3>
            <p className="modal-desc">{selectedProject.outcome}</p>
          </div>
          
          {/* ขยายขนาดปุ่ม Action ด้านล่างสุด */}
          <div style={{ display: 'flex', gap: '18px', marginBottom: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            {selectedProject.actionLinks.map((link, i) => {
              if (link.type === 'private') {
                 return (
                   <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#ff4d4d', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Private</span>
                      <a href={link.url} target="_blank" rel="noreferrer" className="action-pill-btn" style={{ opacity: 0.8, cursor: 'not-allowed' }} onClick={e => e.preventDefault()}>
                        <FaGithub size={20} /> {link.label}
                      </a>
                   </div>
                 )
              }
              return (
                <a key={i} href={link.url} target="_blank" rel="noreferrer" className="action-pill-btn">
                  {link.type === 'code' && <FaGithub size={20} />}
                  {link.type === 'document' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#00ddff'}}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  )}
                  {link.type === 'facebook' && <FaFacebook size={20} color="#1877F2"/>}
                  {link.type === 'make' && <FaCogs size={20} color="#7132F5"/>}
                  {link.label}
                </a>
              )
            })}
          </div>

          {selectedProject.gallery && selectedProject.gallery.length > 0 && (
            <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
              <h3 style={{ color: 'white', fontSize: '1.6rem', fontWeight: '700', margin: '0 0 20px 0' }}>Project Gallery</h3>
              <div className="gallery-grid">
                {selectedProject.gallery.map((media, index) => (
                  <div key={index} className="gallery-item">
                    {media.type === 'youtube' ? (
                      <iframe 
                        src={media.url} 
                        title={`YouTube video ${index}`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        style={{ width: '100%', height: '100%', borderRadius: '12px' }}
                      ></iframe>
                    ) : (
                      <img 
                        src={media.url} 
                        alt={`Gallery ${index}`} 
                        style={{ cursor: 'zoom-in' }} // เปลี่ยนเคอร์เซอร์เป็นแว่นขยาย
                        onClick={() => setZoomedImage(media.url)} // กดแล้วดึงรูปลง State เพื่อขยาย
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions" style={{ marginTop: '40px', justifyContent: 'flex-start' }}>
            <button className="action-btn close-window-btn" onClick={() => setSelectedProject(null)}>Close Window</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div id="projects" ref={sectionRef} style={{ minHeight: '100vh', padding: '15vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "Inter, 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      
      {/* เพิ่มส่วนแสดงรูปขยายแบบเต็มจอ (Lightbox) */}
      {zoomedImage && createPortal(
        <div className="zoom-overlay" onClick={() => setZoomedImage(null)}>
          <div className="zoom-content" onClick={e => e.stopPropagation()}>
            <button className="zoom-close-btn" onClick={() => setZoomedImage(null)}>✕</button>
            <img src={zoomedImage} alt="Zoomed View" />
          </div>
        </div>,
        document.body
      )}

      <style>{`
        /* ================= CARDS ================= */
        .proj-card {
          position: relative;
          background: #141824;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          margin-bottom: 30px; 
        }
        .proj-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 221, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 221, 255, 0.1);
        }
        .proj-card:hover .proj-img-placeholder {
          transform: scale(1.05);
        }
        
        .proj-info-overlay {
          position: absolute;
          bottom: 0; left: 0; width: 100%;
          background: linear-gradient(to top, rgba(10, 15, 25, 0.98) 0%, rgba(10, 15, 25, 0.85) 50%, transparent 100%);
          padding: 40px 24px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.3s ease;
        }

        .card-title {
          margin: 6px 0 0 0;
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.3px;
          line-height: 1.35;
          text-wrap: balance;
          overflow-wrap: break-word;
          word-break: normal;
        }

        .view-details-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s;
          opacity: 0;
          transform: translateY(8px);
        }
        .proj-card:hover .view-details-btn {
          color: #00ddff;
          opacity: 1;
          transform: translateY(0);
        }

        .masonry-layout {
          display: flex;
          gap: 30px;
          width: 100%;
          max-width: 1200px;
        }
        .masonry-column {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* ================= MODAL POPUP ================= */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(5, 10, 15, 0.9);
          backdrop-filter: blur(10px);
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          animation: fadeIn 0.3s forwards;
          cursor: pointer;
        }
        
        .project-modal-content {
          position: relative;
          width: 90vw;
          max-width: 900px;
          max-height: 90vh;
          background: #0f131c; 
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow-y: auto;
          box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 50px rgba(0,221,255,0.05);
          cursor: default;
          animation: popUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .project-modal-content::-webkit-scrollbar { width: 8px; }
        .project-modal-content::-webkit-scrollbar-track { background: transparent; }
        .project-modal-content::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }

        .modal-img-container {
          width: 100%;
          height: 380px;
          background: #080a0f;
          overflow: hidden;
          position: relative;
        }
        .modal-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-details {
          padding: 40px 50px;
          display: flex;
          flex-direction: column;
        }

        .modal-category {
          color: #00ddff;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .modal-title {
          color: white;
          font-size: 2.2rem;
          margin: 0;
          font-weight: 800;
          letter-spacing: -0.5px;
          line-height: 1.3;
          text-wrap: balance;
        }

        /* ---------------- ปุ่ม Action (Code/Doc/FB/Make) ปรับขนาดใหญ่ขึ้น ---------------- */
        .action-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px; /* ขยายขนาด Padding */
          border-radius: 40px;
          font-size: 1.05rem; /* ขยายขนาดฟอนต์ */
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          background: #141824; 
          border: 1px solid rgba(255, 255, 255, 0.15); 
          color: #e2e8f0;
        }
        .action-pill-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.3);
          color: white;
        }

        /* ปุ่ม Tech Stack (Pills) */
        .tech-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s;
        }
        .tech-pill:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.3);
          color: white;
        }

        .modal-desc {
          color: #cbd5e1;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
        }

        /* Project Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }
        .gallery-item {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #080a0f;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.03);
        }

        .modal-actions {
          display: flex;
          gap: 15px;
        }
        .action-btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: inherit;
        }
        .close-window-btn {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .close-window-btn:hover {
          background: rgba(255,255,255,0.05);
          border-color: white;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px; height: 40px;
          background: rgba(5, 10, 15, 0.8);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50%;
          color: white;
          font-size: 18px;
          display: flex; justify-content: center; align-items: center;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
        }
        .close-btn:hover {
          background: #00ddff;
          color: #000;
          transform: rotate(90deg);
        }

        /* ---------------- CSS สำหรับ Lightbox (ระบบขยายรูป) ---------------- */
        .zoom-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 999999; /* ดันให้อยู่หน้าสุด */
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          animation: fadeIn 0.3s forwards;
          cursor: zoom-out; /* เคอร์เซอร์ตอนจะกดปิด */
        }
        .zoom-content {
          position: relative;
          max-width: 95vw;
          max-height: 95vh;
        }
        .zoom-content img {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 8px;
          object-fit: contain;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8);
          animation: popUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .zoom-close-btn {
          position: absolute;
          top: -50px;
          right: 0;
          color: white;
          font-size: 35px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.3s;
        }
        .zoom-close-btn:hover {
          color: #00ddff;
        }

        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes popUp {
          from { transform: scale(0.95) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        @media (max-width: 800px) {
          .masonry-layout { flex-direction: column; }
          .modal-details { padding: 30px 25px; }
          .modal-title { font-size: 1.6rem; }
          .modal-img-container { height: 230px; }
          .modal-actions { flex-direction: column; }
          .card-title { font-size: 1.15rem; }
          .gallery-grid { grid-template-columns: 1fr; }
          .zoom-close-btn { top: -40px; font-size: 28px; right: 10px; }
        }
      `}</style>

      {/* --- Header & Tabs --- */}
      <div style={{ ...popIn3D(0.1), display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px', width: '100%' }}>
        <p style={{ color: '#00ddff', fontWeight: '600', letterSpacing: '2px', margin: '0 0 10px 0', textTransform: 'uppercase', fontSize: '0.9rem' }}>Creative Works</p>
        <h2 style={{ fontSize: '3rem', color: 'white', margin: '0 0 40px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>
          Selected Projects
        </h2>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: activeFilter === cat ? 'rgba(0, 221, 255, 0.15)' : 'transparent',
                border: activeFilter === cat ? '1px solid #00ddff' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeFilter === cat ? '#00ddff' : '#aaaaaa',
                padding: '10px 22px',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={e => { if (activeFilter !== cat) e.currentTarget.style.color = 'white' }}
              onMouseOut={e => { if (activeFilter !== cat) e.currentTarget.style.color = '#aaaaaa' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- Masonry Grid --- */}
      <div className="masonry-layout">
        <div className="masonry-column">
          {leftColumnProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="masonry-column">
          {rightColumnProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + leftColumnProjects.length} />
          ))}
        </div>
      </div>

      {selectedProject && createPortal(detailModal, document.body)}

    </div>
  )
}