import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ChevronUp, ChevronDown, Copy, Edit, Trash2 } from 'lucide-react';

const SubAccountManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState('10');

  const subAccountData = [
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

  return (
    <div className="space-y-4">
      {/* Search Criteria Section */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">การจัดการบัญชีรอง - เกณฑ์การค้นหา</CardTitle>
            <ChevronUp className="h-4 w-4 text-gray-500" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Account/Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อบัญชี/ชื่อ</label>
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
            <CardTitle className="text-base font-medium text-gray-800">การจัดการบัญชีรอง - รายการข้อมูล</CardTitle>
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

          {/* Sub Account Table */}
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">หมายเลขบัญชี</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">ชื่อ</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">วันที่เพิ่ม</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">
                    <Edit className="h-4 w-4 text-gray-500" />
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 px-3">
                    <Trash2 className="h-4 w-4 text-gray-500" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subAccountData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                      ไม่มีข้อมูลในตาราง
                    </TableCell>
                  </TableRow>
                ) : (
                  subAccountData.map((account) => (
                    <TableRow key={account.id} className="border-b last:border-0 hover:bg-gray-50">
                      <TableCell className="py-2 px-3 text-sm text-gray-800">{account.account}</TableCell>
                      <TableCell className="py-2 px-3 text-sm text-gray-800">{account.name}</TableCell>
                      <TableCell className="py-2 px-3 text-sm text-gray-800">{account.dateAdded}</TableCell>
                      <TableCell className="py-2 px-3 text-sm text-gray-800">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Edit className="h-4 w-4 text-gray-500" />
                        </Button>
                      </TableCell>
                      <TableCell className="py-2 px-3 text-sm text-gray-800">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Trash2 className="h-4 w-4 text-gray-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 text-sm text-gray-700">
            <span>แสดงผล 0 ถึง 0 จาก 0</span>
            <div className="flex space-x-1">
              <Button variant="outline" size="sm" disabled className="h-8 w-8 text-xs">-</Button>
              <Button variant="outline" size="sm" disabled className="h-8 w-8 text-xs">-</Button>
              <Button variant="outline" size="sm" disabled className="h-8 w-8 text-xs">-</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubAccountManagement;
