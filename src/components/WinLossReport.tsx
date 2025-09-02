import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronUp, ChevronDown, Calendar, RefreshCw } from 'lucide-react';

const WinLossReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('วันนี้');
  const [startDate, setStartDate] = useState('2025/09/01');
  const [endDate, setEndDate] = useState('2025/09/01');
  const [gameArea, setGameArea] = useState('ทั้งหมด');
  const [gameType, setGameType] = useState('ทั้งหมด');
  const [gameName, setGameName] = useState('ทั้งหมด');
  const [currency, setCurrency] = useState('ทั้งหมด');

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
            <CardTitle className="text-base font-medium text-gray-800">รายงานการชนะ/แพ้ - เกณฑ์การค้นหา</CardTitle>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">วันที่เริ่มต้น</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">วันที่สิ้นสุด</label>
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
                <SelectItem value="ทั้งหมด">ทั้งหมด</SelectItem>
                <SelectItem value="พื้นที่กีฬาและเกม">พื้นที่กีฬาและเกม</SelectItem>
                <SelectItem value="พื้นที่คาสิโน">พื้นที่คาสิโน</SelectItem>
                <SelectItem value="พื้นที่สล็อต">พื้นที่สล็อต</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Game Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ประเภทเกม</label>
            <Select value={gameType} onValueChange={setGameType}>
              <SelectTrigger className="w-full h-9 text-sm border-gray-300">
                <SelectValue placeholder="เลือกประเภทเกม" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ทั้งหมด">ทั้งหมด</SelectItem>
                <SelectItem value="บาคาร่า">บาคาร่า</SelectItem>
                <SelectItem value="เสือมังกร">เสือมังกร</SelectItem>
                <SelectItem value="รูเล็ต">รูเล็ต</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Game Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อเกม</label>
            <Select value={gameName} onValueChange={setGameName}>
              <SelectTrigger className="w-full h-9 text-sm border-gray-300">
                <SelectValue placeholder="เลือกชื่อเกม" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ทั้งหมด">ทั้งหมด</SelectItem>
                <SelectItem value="บาคาร่า A">บาคาร่า A</SelectItem>
                <SelectItem value="บาคาร่า B">บาคาร่า B</SelectItem>
                <SelectItem value="บาคาร่า C">บาคาร่า C</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">สกุลเงิน</label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-full h-9 text-sm border-gray-300">
                <SelectValue placeholder="เลือกสกุลเงิน" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ทั้งหมด">ทั้งหมด</SelectItem>
                <SelectItem value="THB">THB</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Query Button */}
          <div className="flex justify-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium h-9 text-sm px-8">
              สอบถาม
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data List Section */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">รายงานชนะ/แพ้ - รายการข้อมูล</CardTitle>
            <RefreshCw className="h-4 w-4 text-gray-500" />
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

export default WinLossReport;
