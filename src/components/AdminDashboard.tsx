import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SubAccountManagement from './SubAccountManagement';
import SystemAnnouncement from './SystemAnnouncement';
import ChangePassword from './ChangePassword';
import AgentManagement from './AgentManagement';
import MemberManagement from './MemberManagement';
import GameRecords from './GameRecords';
import DepositRecords from './DepositRecords';
import OperationRecords from './OperationRecords';
import UnsettledReport from './UnsettledReport';
import CreditRecords from './CreditRecords';
import LoginHistory from './LoginHistory';
import WinLossReport from './WinLossReport';
import GameSettings from './GameSettings';
import { 
  Home, 
  Users, 
  BarChart3, 
  FileText, 
  Settings, 
  ChevronDown,
  ChevronUp,
  Menu,
  LogOut,
  DollarSign,
  UserCheck,
  Gamepad2,
  CreditCard,
  PieChart,
  Bell,
  Monitor,
  Copy,
  RefreshCw,
  Edit,
  Trash2
} from 'lucide-react';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true); // ปิดเป็นค่าเริ่มต้น
  const [expandedMenus, setExpandedMenus] = useState({
    gameRecords: false,
    historicalRecords: false,
    statisticalReports: false
  });

  const handleLogout = () => {
    window.location.reload();
  };

  const handleHomeClick = () => {
    setSelectedTab('dashboard');
  };
  
  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId as keyof typeof prev]
    }));
  };

  const menuItems = [
    { id: 'profile', label: 'เปลี่ยนรหัสผ่าน', icon: Settings },
    { id: 'personalGameDetails', label: 'รายละเอียดเกมส่วนตัว', icon: Gamepad2 },
    { id: 'subAccountManagement', label: 'การจัดการบัญชีรอง', icon: Users },
    { id: 'systemAnnouncement', label: 'ประกาศระบบ', icon: Bell },
    { id: 'generalAgents', label: 'ตัวแทนทั่วไป', icon: UserCheck },
    { id: 'agents', label: 'ตัวแทน', icon: Users },
    { id: 'members', label: 'สมาชิก', icon: PieChart },
    { 
      id: 'gameRecords', 
      label: 'บันทึกเกม', 
      icon: FileText, 
      hasSubmenu: true,
      submenu: [
        { id: 'openingRecords', label: 'บันทึกการเปิดงาน' },
        { id: 'realtimeBetting', label: 'บันทึกการเดิมพันแบบเรียลไทม์' }
      ]
    },
    { 
      id: 'historicalRecords', 
      label: 'บันทึกทางประวัติศาสตร์', 
      icon: CreditCard, 
      hasSubmenu: true,
      submenu: [
        { id: 'depositRecords', label: 'บันทึกการเติมเงิน' },
        { id: 'creditRecords', label: 'บันทึกวงเงินสินเชื่อ' },
        { id: 'operationRecords', label: 'บันทึกการดำเนินงาน' },
        { id: 'loginHistory', label: 'ประวัติการเข้าสู่ระบบ' }
      ]
    },
    { 
      id: 'statisticalReports', 
      label: 'รายงานสถิติ', 
      icon: BarChart3, 
      hasSubmenu: true,
      submenu: [
        { id: 'unsettledReport', label: 'รายงานที่ยังไม่ยุติ' },
        { id: 'winLossReport', label: 'รายงานการชนะ/แพ้' }
      ]
    }
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'dashboard':
        return (
          <div className="space-y-4">
                         {/* Dashboard Cards */}
             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardHeader className="pb-2 p-3 sm:p-4">
                  <CardTitle className="text-sm sm:text-base lg:text-lg font-medium">ตัวแทนทั่วไป</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0">
                  <div className="flex items-center justify-end">
                    <UserCheck className="h-6 w-6 sm:h-8 sm:w-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white">
                <CardHeader className="pb-2 p-3 sm:p-4">
                  <CardTitle className="text-sm sm:text-base lg:text-lg font-medium">สมาชิก</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0">
                  <div className="flex items-center justify-end">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white">
                <CardHeader className="pb-2 p-3 sm:p-4">
                  <CardTitle className="text-sm sm:text-base lg:text-lg font-medium">รายงานการชนะ/แพ้</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0">
                  <div className="flex items-center justify-end">
                    <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardHeader className="pb-2 p-3 sm:p-4">
                  <CardTitle className="text-sm sm:text-base lg:text-lg font-medium">บันทึกการเดิมเงิน</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0">
                  <div className="flex items-center justify-end">
                    <FileText className="h-6 w-6 sm:h-8 sm:w-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>
            </div>

                         {/* General Agent Recharge Form */}
             <Card className="shadow-sm border">
               <CardHeader>
                 <CardTitle className="text-base sm:text-lg font-medium text-gray-800">การกรอกเงินค่าธรรมเนียมตัวแทนทั่วไป</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 <div className="flex flex-col sm:flex-row gap-2">
                   <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm">
                     เติมเงิน
                   </Button>
                   <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                     ตรวจสอบ
                   </Button>
                 </div>

                                 <div className="space-y-3 sm:space-y-4">
                   <div>
                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                       บัญชีผู้ตัวแทนทั่วไป/ยอดคงเหลือปัจจุบัน
                     </label>
                     <Select>
                       <SelectTrigger className="w-full h-9 sm:h-10 text-xs sm:text-sm">
                         <SelectValue placeholder="i5a16 / 0.0000" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="i5a16">i5a16 / 0.0000</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>

                   <div>
                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                       จำนวน
                     </label>
                     <Input 
                       type="number" 
                       placeholder="0"
                       className="w-full h-9 sm:h-10 text-xs sm:text-sm"
                     />
                   </div>

                   <div>
                     <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                       รหัสผ่าน 💳
                     </label>
                     <Input 
                       type="password" 
                       placeholder="กรุณากรอกรหัสผ่านในการยืนยันรายการ"
                       className="w-full h-9 sm:h-10 text-xs sm:text-sm"
                     />
                   </div>

                   <Button 
                     className="w-full bg-gray-400 hover:bg-gray-500 text-white h-9 sm:h-10 text-xs sm:text-sm"
                     disabled
                   >
                     แน่นอน
                   </Button>
                 </div>
              </CardContent>
            </Card>
          </div>
        );
      case 'profile':
        return <ChangePassword />;
      case 'personalGameDetails':
        return <GameSettings />;
      case 'subAccountManagement':
        return <SubAccountManagement />;
      case 'systemAnnouncement':
        return <SystemAnnouncement />;
      case 'generalAgents':
        return <AgentManagement />;
      case 'agents':
        return <AgentManagement />;
      case 'members':
        return <MemberManagement />;
      case 'openingRecords':
        return <GameRecords />;
      case 'realtimeBetting':
        return <GameRecords />;
      case 'depositRecords':
        return <DepositRecords />;
      case 'creditRecords':
        return <CreditRecords />;
      case 'operationRecords':
        return <OperationRecords />;
      case 'loginHistory':
        return <LoginHistory />;
      case 'unsettledReport':
        return <UnsettledReport />;
      case 'winLossReport':
        return <WinLossReport />;
      default:
        return (
          <div className="p-4 text-center text-gray-500">
            เลือกเมนูเพื่อแสดงเนื้อหา
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header - Fixed Position */}
      <div className="fixed top-0 left-0 right-0 bg-cyan-500 text-white px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between z-50">
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white hover:bg-white/20 h-8 w-8 sm:h-10 sm:w-10"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Home className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" onClick={handleHomeClick} />
          <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="font-medium text-sm sm:text-base">0.0000</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Users className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">อิลา14</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="text-white hover:bg-white/20 h-8 w-8 sm:h-10 sm:w-10"
          >
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      <div className="flex pt-12 sm:pt-16">
        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? '' : 'mr-72 sm:mr-80 lg:mr-80'}`}>
          <div className="p-2 sm:p-4 lg:p-6">
            {renderContent()}
          </div>
        </div>

        {/* Mobile Overlay */}
        {!sidebarCollapsed && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarCollapsed(true)}
          />
        )}

        {/* Right Sidebar - Fixed Position with Scrollable Content */}
        <div className={`fixed right-0 top-12 sm:top-16 h-[calc(100vh-3rem)] sm:h-[calc(100vh-4rem)] w-72 sm:w-80 bg-cyan-500 text-white transform transition-transform duration-300 ${sidebarCollapsed ? 'translate-x-full' : 'translate-x-0'} z-40 shadow-xl`}>
          <div className="h-full flex flex-col">
            {/* Menu Items - Scrollable */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-1 sm:space-y-2 scrollbar-thin scrollbar-thumb-cyan-300 scrollbar-track-transparent">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isExpanded = expandedMenus[item.id as keyof typeof expandedMenus];
                const isActive = selectedTab === item.id;
                
                return (
                  <div key={item.id}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-between text-white hover:bg-white/20 py-2 sm:py-3 text-xs sm:text-sm rounded-md ${
                        isActive ? 'bg-white/20 shadow-sm' : ''
                      }`}
                      onClick={() => {
                        if (item.hasSubmenu) {
                          toggleMenu(item.id);
                        } else {
                          setSelectedTab(item.id);
                        }
                      }}
                    >
                      <span className="text-left">{item.label}</span>
                      {item.hasSubmenu && (
                        isExpanded ? (
                          <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
                        ) : (
                          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                        )
                      )}
                    </Button>
                    
                    {/* Submenu */}
                    {item.hasSubmenu && isExpanded && item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Button
                            key={subItem.id}
                            variant="ghost"
                            className={`w-full justify-start text-white hover:bg-white/20 py-1 sm:py-2 text-xs rounded-md ${
                              selectedTab === subItem.id ? 'bg-white/20 shadow-sm' : ''
                            }`}
                            onClick={() => setSelectedTab(subItem.id)}
                          >
                            {subItem.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Bottom Buttons - Fixed at Bottom */}
            <div className="p-2 sm:p-4 space-y-1 sm:space-y-2 border-t border-cyan-400 bg-cyan-400/20 flex-shrink-0">
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 sm:py-3 text-xs sm:text-sm rounded-md">
                <Monitor className="h-4 w-4 mr-2" />
                เดสก์ท็อป
              </Button>
              <Button 
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 sm:py-3 text-xs sm:text-sm rounded-md"
              >
                ออกจากระบบ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;