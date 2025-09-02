import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ChevronUp, ChevronDown, Copy, Edit, DollarSign, RefreshCw } from 'lucide-react';

const MemberManagement = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState('10');

  const memberData = [
    { 
      id: 1, 
      account: 'ไอซาคิว9623', 
      name: '4444', 
      agentAccount: 'ไอซา0112', 
      credit: '0.0000', 
      dateAdded: '2025-08-30 01:00:42', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    },
    { 
      id: 2, 
      account: 'ไอซาคิว9624', 
      name: '5551', 
      agentAccount: 'ไอซา0112', 
      credit: '0.1900', 
      dateAdded: '2025-08-30 01:00:42', 
      freezeStatus: 'ไม่มีการแช่แข็ง', 
      lockStatus: 'ปลดล็อค' 
    }
  ];

  const filteredMembers = memberData.filter(member => {
    const matchesStatus = statusFilter === 'all' || 
                          (statusFilter === 'active' && member.lockStatus === 'ปลดล็อค') ||
                          (statusFilter === 'inactive' && member.lockStatus !== 'ปลดล็อค');
    const matchesSearch = member.account.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-4">
      {/* Search Criteria Section */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">การจัดการสมาชิก - เกณฑ์การค้นหา</CardTitle>
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

          {/* Agent Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">เลือกตัวแทน</label>
            <Select>
              <SelectTrigger className="w-full h-9 text-sm border-gray-300">
                <SelectValue placeholder="ทั้งหมด" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">ทั้งหมด</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Member Account Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อบัญชีสมาชิก</label>
            <Input
              type="text"
              placeholder="กรุณากรอกหมายเลขบัญชีหรือชื่อของคุณ"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 text-sm border-gray-300"
            />
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
            <CardTitle className="text-base font-medium text-gray-800">การจัดการสมาชิก-รายการโปรไฟล์</CardTitle>
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

          {/* Members Table */}
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">บัญชีสมาชิก</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">ชื่อสมาชิก</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">บัญชีตัวแทน</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">วงเงินสินเชื่อปัจจุบัน</TableHead>
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
                {filteredMembers.map((member) => (
                  <TableRow key={member.id} className="border-b last:border-0 hover:bg-gray-50">
                    <TableCell className="py-2 px-3 text-sm text-gray-800 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      {member.account}
                      <Copy className="h-3 w-3 ml-2 text-gray-400 cursor-pointer" />
                    </TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">{member.name}</TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">{member.agentAccount}</TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800 flex items-center">
                      {member.credit}
                      <RefreshCw className="h-3 w-3 ml-2 text-gray-400 cursor-pointer" />
                    </TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">{member.dateAdded}</TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">
                      <Badge className="bg-green-500 text-white text-xs font-normal px-2 py-1 rounded-md">
                        {member.freezeStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-2 px-3 text-sm text-gray-800">
                      <Badge className="bg-green-500 text-white text-xs font-normal px-2 py-1 rounded-md">
                        {member.lockStatus}
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

export default MemberManagement;
