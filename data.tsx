import { 
  Cpu, 
  Zap, 
  Battery, 
  Wifi, 
  Layout, 
  Activity,
  Code,
  PenTool,
  Monitor
} from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillCategory, LeadershipItem } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'NSF REU Researcher',
    company: 'Virginia Tech',
    location: 'Blacksburg, VA',
    date: 'Jun 2025 – Aug 2025',
    metrics: [
      'Developed Hardware-in-the-Loop verification for IoT',
      'Increased testing efficiency by 40% via automation',
      'Analyzed power consumption across 15+ IoT nodes'
    ],
    skills: ['HIL Testing', 'IoT', 'Power Analysis', 'Python'],
    icon: Wifi
  },
  {
    id: '2',
    role: 'Hardware Test Engineer Intern',
    company: 'Valley Water',
    location: 'San Jose, CA',
    date: 'Jan 2025 – Jun 2025',
    metrics: [
      'Automated hardware testing using Python scripts',
      'Reduced manual calibration time by 65%',
      'Maintained 99.9% sensor uptime across water grid'
    ],
    skills: ['Python', 'Automation', 'Sensor Calibration'],
    icon: Activity
  },
  {
    id: '3',
    role: 'NSF REU Researcher',
    company: 'University of Tennessee',
    location: 'Knoxville, TN',
    date: 'May 2024 – Jul 2024',
    metrics: [
      'Designed screen-printed paper batteries (140 Wh/kg)',
      'Achieved 92% yield rate in fabrication process',
      'Published findings on flexible energy storage'
    ],
    skills: ['Battery Design', 'Materials Science', 'Fabrication'],
    icon: Battery
  },
  {
    id: '4',
    role: 'Hardware Verification Intern',
    company: 'City of Cupertino',
    location: 'Cupertino, CA',
    date: 'Feb 2024 – May 2024',
    metrics: [
      'Validated 50+ hardware systems for municipal use',
      'Diagnosed and repaired 20+ PCB failures',
      'Implemented new ESD safety protocols'
    ],
    skills: ['Validation', 'Troubleshooting', 'PCB Repair'],
    icon: Layout
  },
  {
    id: '5',
    role: 'Research Assistant',
    company: 'Stanford Research Collaboration',
    location: 'Remote / Stanford, CA',
    date: 'Jan 2024 – Feb 2025',
    metrics: [
      'Modeled Li-ion thermal management for aerospace',
      'Simulated heat dissipation reducing risks by 25%',
      'Optimized power system weight for flight specs'
    ],
    skills: ['Thermal Analysis', 'Aerospace Power', 'Simulink'],
    icon: Zap
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'High-Load IoT Power Monitor',
    category: 'IoT Hardware',
    description: 'A precision power monitoring system for industrial IoT nodes capable of handling high loads.',
    specs: ['1415 W Load Capacity', '0.5% Accuracy', 'WiFi-enabled'],
    stack: ['ESP32', 'Current Sensors', 'Altium', 'C++']
  },
  {
    id: 'p2',
    title: 'Flexible Paper Battery',
    category: 'Battery Research',
    description: 'Novel screen-printed battery chemistry designed for disposable electronics and smart packaging.',
    specs: ['140 Wh/kg Energy Density', 'Flexible Form Factor', 'Biodegradable'],
    stack: ['Electrochemistry', 'Screen Printing', 'Materials Testing']
  },
  {
    id: 'p3',
    title: 'Turbidity Sensor Array',
    category: 'Embedded',
    description: 'Low-cost embedded sensor array for real-time water quality monitoring.',
    specs: ['< 1s Response Time', 'Solar Powered', 'LoRaWAN'],
    stack: ['Embedded C', 'STM32', 'Analog Circuit Design']
  },
  {
    id: 'p4',
    title: 'FPGA Signal Processor',
    category: 'PCB Design',
    description: 'Custom PCB implementing high-speed signal processing on an FPGA for communications.',
    specs: ['4-Layer PCB', 'Signal Integrity Verified', '100MHz Clock'],
    stack: ['Verilog', 'Quartus', 'KiCAD']
  },
  {
    id: 'p5',
    title: 'Solar Inverter Optimizer',
    category: 'Power Systems',
    description: 'MPPT algorithm implementation improving micro-inverter efficiency in partial shade.',
    specs: ['98% Peak Efficiency', 'Fast Tracking', 'Grid-Tie Ready'],
    stack: ['Power Electronics', 'MATLAB/Simulink', 'DSP']
  },
  {
    id: 'p6',
    title: 'Remote Weather Station',
    category: 'IoT Hardware',
    description: 'Ruggedized hardware design for autonomous weather sensing in remote locations.',
    specs: ['IP67 Rated', '2-Year Battery Life', 'Satellite Uplink'],
    stack: ['Hardware Design', 'Low Power Design', 'Mechanical CAD']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Hardware',
    skills: ['Circuit Design', 'PCB Layout', 'Power Systems', 'Embedded Systems', 'Signal Integrity'],
    icon: Cpu
  },
  {
    title: 'Programming',
    skills: ['C / C++', 'Python (Hardware Test)', 'MATLAB', 'Verilog / SystemVerilog', 'Assembly'],
    icon: Code
  },
  {
    title: 'Tools & CAD',
    skills: ['Altium Designer', 'LTspice', 'Quartus Prime', 'KiCAD', 'SolidWorks'],
    icon: PenTool
  },
  {
    title: 'Instrumentation',
    skills: ['Oscilloscope', 'Spectrum Analyzer', 'VNA', 'Power Analyzer', 'Logic Analyzer'],
    icon: Monitor
  }
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    role: 'President',
    org: "Developers' Guild",
    stats: '500+ Members',
    description: 'Leading the largest technical club at De Anza/transfer to Berkeley. Organized 20+ hardware workshops.'
  },
  {
    role: 'Director',
    org: 'DAHacks Hardware Hackathon',
    stats: '$20K Raised',
    description: 'Managed 300 participants and 70 hardware demos. Secured corporate sponsorships.'
  },
  {
    role: 'Scholar',
    org: 'NASA Aerospace Scholars',
    stats: 'Mission Design',
    description: 'Selected for competitive program designing autonomous rover systems and mission protocols.'
  }
];