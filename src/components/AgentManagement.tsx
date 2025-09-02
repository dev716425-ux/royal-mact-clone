import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ChevronUp, ChevronDown, DollarSign, Edit, Plus } from 'lucide-react';

const AgentManagement = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState('10');

  const agentData = [
    { 
      id: 1, 
      name: 'เจม', 
      generalAgentAccount: 'ไอซา27', 
      agentAccount: '• ฉันคือ_0', 
      credit: '0.0000', 
      members: 4, 
      percentage: '74%', 
      dateAdded: '2025-07-08 17:52:31', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    },
    { 
      id: 2, 
      name: 'มุด', 
      generalAgentAccount: 'ไอซา26', 
      agentAccount: '• iSa7122', 
      credit: '0.0000', 
      members: 6, 
      percentage: '77%', 
      dateAdded: '2025-07-08 15:41:25', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    },
    { 
      id: 3, 
      name: 'อาลี', 
      generalAgentAccount: 'ไอซา25', 
      agentAccount: '• ฉันคือ_0', 
      credit: '0.0000', 
      members: 3, 
      percentage: '75%', 
      dateAdded: '2025-07-07 19:25:03', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    },
    { 
      id: 4, 
      name: 'ก', 
      generalAgentAccount: 'ไอซา24', 
      agentAccount: '• ฉันคือ_0', 
      credit: '0.0000', 
      members: 6, 
      percentage: '75%', 
      dateAdded: '2025-07-07 17:38:18', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    },
    { 
      id: 5, 
      name: 'แออ', 
      generalAgentAccount: 'ไอซา23', 
      agentAccount: '• ฉันคือ_0', 
      credit: '0.0000', 
      members: 12, 
      percentage: '75%', 
      dateAdded: '2025-07-07 17:36:52', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    },
    { 
      id: 6, 
      name: 'ตึก', 
      generalAgentAccount: 'ไอซา22', 
      agentAccount: '• ฉันคือ_0', 
      credit: '0.0000', 
      members: 0, 
      percentage: '76%', 
      dateAdded: '2025-07-07 17:34:53', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    },
    { 
      id: 7, 
      name: 'เอื้อยนี', 
      generalAgentAccount: 'ไอซา21', 
      agentAccount: '• ฉันคือ_0', 
      credit: '0.0000', 
      members: 3, 
      percentage: '74%', 
      dateAdded: '2025-07-07 17:34:01', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    }
  ];

  const filteredAgents = agentData.filter(agent => {
    const matchesStatus = statusFilter === 'all' || 
                          (statusFilter === 'active' && agent.lockStatus === 'ปลดล็อค') ||
                          (statusFilter === 'inactive' && agent.lockStatus !== 'ปลดล็อค');
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agent.generalAgentAccount.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-4">
      {/* Search Criteria Section */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">การจัดการตัวแทน - เกณฑ์การค้นหา</CardTitle>
            <ChevronUp className="h-4 w-4 text-gray-500" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">สถานะ</label>
            <div className="flex space-x-2">
              <Button 
                variant={statusFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                className={`text-xs ${statusFilter === 'all' ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setStatusFilter('all')}
              >
                ทั้งหมด
              </Button>
              <Button 
                variant={statusFilter === 'active' ? 'default' : 'outline'}
                size="sm"
                className={`text-xs ${statusFilter === 'active' ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setStatusFilter('active')}
              >
                เปิดใช้งาน
              </Button>
              <Button 
                variant={statusFilter === 'inactive' ? 'default' : 'outline'}
                size="sm"
                className={`text-xs ${statusFilter === 'inactive' ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setStatusFilter('inactive')}
              >
                ปิดใช้งาน
              </Button>
            </div>
          </div>

          {/* General Agent Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">เลือกตัวแทนทั่วไป</label>
            <Select>
              <SelectTrigger className="w-full h-9 text-sm border-gray-300">
                <SelectValue placeholder="全部" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Account/Agent Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อบัญชี/ชื่อตัวแทน</label>
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="กรุณากรอกหมายเลขบัญชีหรือชื่อของคุณ"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 h-9 text-sm border-gray-300"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium h-9 text-sm px-4">
                <Plus className="h-4 w-4 mr-1" /> ใหม่
              </Button>
            </div>
          </div>

          {/* Query Button */}
          <div className="flex justify-end">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium h-9 text-sm px-6">
              สอบถาม
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data List Section */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">การจัดการตัวแทน-รายการข้อมูล</CardTitle>
            <ChevronUp className="h-4 w-4 text-gray-500" />
          </div>
        </CardHeader>
        <CardContent>
          {/* Pagination and Results */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <span>แสดง</span>
              <Select value={showEntries} onValueChange={setShowEntries}>
                <SelectTrigger className="w-[70px] h-8 text-xs">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span>ผลลัพธ์</span>
            </div>
          </div>

          {/* Agents Table */}
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">ชื่อตัวแทน</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">บัญชีตัวแทนทั่วไป</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">บัญชีตัวแทน</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">วงเงินสินเชื่อปัจจุบัน</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">จำนวนสมาชิก</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">เปอร์เซ็นต์</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">วันที่เพิ่ม</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">สถานะแช่แข็ง</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">สถานะล็อค</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">
                    <Edit className="h-4 w-4 text-gray-500" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAgents.map((agent) => (
                  <TableRow key={agent.id} className="border-b last:border-0 hover:bg-gray-50">
                    <TableCell className="py-2 px-3 text-sm text-gray-800">{agent.name}</TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">{agent.generalAgentAccount}</TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      {agent.agentAccount}
                    </TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">{agent.credit}</TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">
                      <Badge className="bg-cyan-500 text-white text-xs font-normal px-2 py-1 rounded-full">
                        {agent.members}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">{agent.percentage}</TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">{agent.dateAdded}</TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">
                      <Badge className="bg-green-500 text-white text-xs font-normal px-2 py-1 rounded-md">
                        {agent.freezeStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">
                      <Badge className="bg-green-500 text-white text-xs font-normal px-2 py-1 rounded-md">
                        {agent.lockStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                      </Button>
                    </TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Edit className="h-4 w-4 text-gray-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentManagement;
