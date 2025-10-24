// Utility functions for managing assets and providing fallbacks

export interface AssetInfo {
  exists: boolean;
  path: string;
  fallback: string;
  type: 'team' | 'job' | 'history' | 'equipment' | 'facility';
}

export const ASSET_PATHS = {
  // Team photos
  founder: '/assets/team/founder.jpg',
  currentOwner: '/assets/team/current-owner.jpg',
  teamGroup: '/assets/team/team-group.jpg',
  
  // Job photos
  acInstallation: '/assets/jobs/ac-installation-1.jpg',
  heatingRepair: '/assets/jobs/heating-repair-1.jpg',
  commercialHvac: '/assets/jobs/commercial-hvac-1.jpg',
  beforeAfter: '/assets/jobs/before-after-1.jpg',
  
  // History photos
  companyFounding: '/assets/history/company-founding.jpg',
  originalOffice: '/assets/history/original-office.jpg',
  vintageEquipment: '/assets/history/vintage-equipment.jpg',
  
  // Equipment photos
  serviceTruck: '/assets/equipment/service-truck-1.jpg',
  diagnosticTools: '/assets/equipment/diagnostic-equipment.jpg',
  newUnits: '/assets/equipment/new-units.jpg',
  
  // Facility photos
  headquarters: '/assets/facilities/headquarters-exterior.jpg',
  officeInterior: '/assets/facilities/office-interior.jpg',
  serviceBay: '/assets/facilities/service-bay.jpg'
};

// Fallback placeholder images
export const FALLBACK_IMAGES = {
  team: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjRjFGNUY5Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5NDk5QTQiLz4KPHBhdGggZD0iTTgwIDI2MEMxMDAgMjIwIDEyNSAyMDAgMTYwIDIwMEMxOTUgMjAwIDIyMCAyMjAgMjQwIDI2MEg4MFoiIGZpbGw9IiM5NDk5QTQiLz4KPHRleHQgeD0iMTYwIiB5PSIyOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Mzc1OEEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlRlYW0gUGhvdG88L3RleHQ+Cjwvc3ZnPg==',
  job: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxyZWN0IHg9IjEwMCIgeT0iODAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjOTQ5OUE0IiByeD0iOCIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNDAiIHI9IjIwIiBmaWxsPSIjRjFGNUY5Ii8+CjxwYXRoIGQ9Ik0xODUgMTM1SDE5NVYxNDVIMTg1VjEzNVoiIGZpbGw9IiM5NDk5QTQiLz4KPHA+dGggZD0iTTIwNSAxMzVIMjE1VjE0NUgyMDVWMTM1WiIgZmlsbD0iIzk0OTlBNCIvPgo8dGV4dCB4PSIyMDAiIHk9IjI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzYzNzU4QSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+Sm9iIFBob3RvPC90ZXh0Pgo8L3N2Zz4=',
  history: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxyZWN0IHg9IjgwIiB5PSI2MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxODAiIGZpbGw9IiM5NDk5QTQiIHJ4PSI4Ii8+CjxyZWN0IHg9IjEwMCIgeT0iODAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTQwIiBmaWxsPSIjRjFGNUY5IiByeD0iNCIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjMwIiBmaWxsPSIjOTQ5OUE0Ii8+CjxwYXRoIGQ9Ik0yMDAgMTMwVjE1MEgyMjAiIHN0cm9rZT0iI0YxRjVGOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHR4ZXQgeD0iMjAwIiB5PSIyNzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Mzc1OEEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkhpc3RvcnkgUGhvdG88L3RleHQ+Cjwvc3ZnPg==',
  equipment: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxyZWN0IHg9IjEyMCIgeT0iMTAwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzk0OTlBNCIgcng9IjgiLz4KPGNpcmNsZSBjeD0iMTQwIiBjeT0iMTIwIiByPSI4IiBmaWxsPSIjRjFGNUY5Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEyMCIgcj0iOCIgZmlsbD0iI0YxRjVGOSIvPgo8Y2lyY2xlIGN4PSIxODAiIGN5PSIxMjAiIHI9IjgiIGZpbGw9IiNGMUY1RjkiLz4KPHJlY3QgeD0iMTQwIiB5PSIxNTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI0YxRjVGOSIgcng9IjQiLz4KPHA+dGV4dCB4PSIyMDAiIHk9IjI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzYzNzU4QSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+RXF1aXBtZW50IFBob3RvPC90ZXh0Pgo8L3N2Zz4=',
  facility: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxyZWN0IHg9IjgwIiB5PSIxMDAiIHdpZHRoPSIyNDAiIGhlaWdodD0iMTQwIiBmaWxsPSIjOTQ5OUE0Ii8+CjxyZWN0IHg9IjE0MCIgeT0iMTUwIiB3aWR0aD0iNDAiIGhlaWdodD0iNjAiIGZpbGw9IiNGMUY1RjkiLz4KPHJlY3QgeD0iMjIwIiB5PSIxNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI0YxRjVGOSIvPgo8cG9seWdvbiBwb2ludHM9IjgwLDEwMCAyMDAsMTQwIDMyMCwxMDAiIGZpbGw9IiM2Mzc1OEEiLz4KPHA+dGV4dCB4PSIyMDAiIHk9IjI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzYzNzU4QSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+RmFjaWxpdHkgUGhvdG88L3RleHQ+Cjwvc3ZnPg=='
};

// Helper function to generate team member photo paths
export function getTeamMemberPath(memberNumber: number): string {
  return `/assets/team/member-${memberNumber}.jpg`;
}

// Helper function to generate job photo paths
export function getJobPhotoPath(jobType: string, number: number = 1): string {
  return `/assets/jobs/${jobType}-${number}.jpg`;
}

// Common job photo types
export const JOB_TYPES = {
  AC_INSTALLATION: 'ac-installation',
  HEATING_REPAIR: 'heating-repair',
  COMMERCIAL_HVAC: 'commercial-hvac',
  BEFORE_AFTER: 'before-after',
  EQUIPMENT_ROOM: 'equipment-room',
  MAINTENANCE: 'maintenance',
  EMERGENCY_REPAIR: 'emergency-repair'
};

// Sample data for team members (to be replaced with actual data)
export const SAMPLE_TEAM_DATA = [
  {
    name: "Add Your Father's Name",
    title: "Founder & HVAC Expert",
    photo: ASSET_PATHS.founder,
    bio: "Founded Cole Air in 1985 with a vision to provide honest, reliable HVAC services to Lake Charles families.",
    experience: "40+ years",
    isFounder: true,
    certifications: ["Master HVAC Technician", "EPA Certified"]
  },
  {
    name: "Add Your Name",
    title: "Owner & Operations Manager",
    photo: ASSET_PATHS.currentOwner,
    bio: "Continuing the family tradition of excellence while bringing modern technology and business practices to Cole Air.",
    experience: "20+ years",
    isOwner: true,
    certifications: ["NATE Certified", "Business Management"]
  }
];

export const SAMPLE_JOB_PHOTOS = [
  {
    src: getJobPhotoPath(JOB_TYPES.AC_INSTALLATION, 1),
    alt: "Professional AC Installation",
    title: "Central Air Installation",
    description: "Complete HVAC system installation with clean, professional workmanship."
  },
  {
    src: getJobPhotoPath(JOB_TYPES.HEATING_REPAIR, 1),
    alt: "Heating System Repair",
    title: "Furnace Repair Service",
    description: "Expert heating system diagnostics and repair services."
  },
  {
    src: getJobPhotoPath(JOB_TYPES.COMMERCIAL_HVAC, 1),
    alt: "Commercial HVAC Installation",
    title: "Commercial HVAC Project",
    description: "Large-scale commercial heating and cooling system installation."
  }
];