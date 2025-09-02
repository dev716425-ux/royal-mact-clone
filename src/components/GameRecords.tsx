import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronUp, ChevronDown, Calendar } from 'lucide-react';

const GameRecords = () => {
  const [dateRange, setDateRange] = useState('2025/09/01');
  const [server, setServer] = useState('百家樂C-A');
  const [session, setSession] = useState('');

  return (
    <div className="space-y-4">
      {/* Search Criteria Section */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">เกณฑ์การค้นหา - เกณฑ์การเปิดบันทึก</CardTitle>
            <ChevronUp className="h-4 w-4 text-gray-500" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ช่วงวันที่</label>
            <div className="relative">
              <Input
                type="text"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="h-9 text-sm border-gray-300 pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Server Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">เซิร์ฟเวอร์</label>
            <Select value={server} onValueChange={setServer}>
              <SelectTrigger className="w-full h-9 text-sm border-gray-300">
                <SelectValue placeholder="เลือกเซิร์ฟเวอร์" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="百家樂C-A">百家樂C-A</SelectItem>
                <SelectItem value="百家樂C-B">百家樂C-B</SelectItem>
                <SelectItem value="百家樂C-C">百家樂C-C</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Session Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">เซสชั่น</label>
            <Input
              type="text"
              placeholder="เช่น 0010001"
              value={session}
              onChange={(e) => setSession(e.target.value)}
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
            <CardTitle className="text-base font-medium text-gray-800">การเปิดบันทึก - รายการข้อมูล</CardTitle>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            เลือกเกณฑ์การค้นหาเพื่อแสดงข้อมูล
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameRecords;
