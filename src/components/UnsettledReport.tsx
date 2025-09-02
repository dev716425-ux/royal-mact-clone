import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronUp, ChevronDown, Calendar } from 'lucide-react';

const UnsettledReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('วันนี้');
  const [startDate, setStartDate] = useState('2025/09/01');
  const [endDate, setEndDate] = useState('2025/09/01');
  const [gameArea, setGameArea] = useState('พื้นที่กีฬาและเกม');
  const [producer, setProducer] = useState('ซาบา');
  const [memberAccount, setMemberAccount] = useState('');

  const periodButtons = [
    'วันนี้', 'เมื่อวาน', 'สัปดาห์นี้', 'สัปดาห์ที่แล้ว', 
    'เดือนนี้', 'เดือนที่แล้ว', 'เดือนที่แล้ว'
  ];

  return (
    <div className="space-y-4">
      {/* Search Criteria Section */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">รายงานที่ยังไม่เสร็จสิ้น - เกณฑ์การค้นหา</CardTitle>
            <ChevronUp className="h-4 w-4 text-gray-500" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Period Selection Buttons */}
          <div>
            <div className="flex flex-wrap gap-2">
              {periodButtons.map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? 'default' : 'outline'}
                  size="sm"
                  className={`text-xs ${selectedPeriod === period ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setSelectedPeriod(period)}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ช่วงวันที่ (เริ่มต้น)</label>
              <div className="relative">
                <Input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="h-9 text-sm border-gray-300 pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ช่วงวันที่ (สิ้นสุด)</label>
              <div className="relative">
                <Input
                  type="text"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="h-9 text-sm border-gray-300 pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Game Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">พื้นที่เล่นเกม</label>
            <Select value={gameArea} onValueChange={setGameArea}>
              <SelectTrigger className="w-full h-9 text-sm border-gray-300">
                <SelectValue placeholder="เลือกพื้นที่เล่นเกม" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="พื้นที่กีฬาและเกม">พื้นที่กีฬาและเกม</SelectItem>
                <SelectItem value="พื้นที่คาสิโน">พื้นที่คาสิโน</SelectItem>
                <SelectItem value="พื้นที่สล็อต">พื้นที่สล็อต</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Producer */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ผู้ผลิต</label>
            <Select value={producer} onValueChange={setProducer}>
              <SelectTrigger className="w-full h-9 text-sm border-gray-300">
                <SelectValue placeholder="เลือกผู้ผลิต" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ซาบา">ซาบา</SelectItem>
                <SelectItem value="จีคลับ">จีคลับ</SelectItem>
                <SelectItem value="ดับเบิลยูเอ็ม">ดับเบิลยูเอ็ม</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Member Account */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">*บัญชีสมาชิก</label>
            <Input
              type="text"
              placeholder="กรุณากรอกหมายเลขบัญชีของคุณ"
              value={memberAccount}
              onChange={(e) => setMemberAccount(e.target.value)}
              className="h-9 text-sm border-gray-300"
            />
          </div>

          {/* Query Button */}
          <div className="flex justify-center">
            <Button className="bg-gray-400 hover:bg-gray-500 text-white font-medium h-9 text-sm px-8">
              สอบถาม
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data List Section */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">รายงานที่ยังไม่เสร็จ - รายการข้อมูล</CardTitle>
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

export default UnsettledReport;
