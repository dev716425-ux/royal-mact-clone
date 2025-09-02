import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';

const GameSettings = () => {
  const [waterReduction, setWaterReduction] = useState('0.7');
  const [maxBet1, setMaxBet1] = useState('100,000');
  const [maxBet2, setMaxBet2] = useState('20,000,000');
  const [minBet, setMinBet] = useState('50');
  const [minMultiBet, setMinMultiBet] = useState('50');

  const gameTypes = [
    'เสือมังกร',
    'ซิกโบ',
    'รูเล็ต',
    'ฟันตัน',
    'บดินทร์',
    'ลูกเต๋าไทย',
    'บล็อคเชนบาคาร่า',
    'บล็อคเชน ดราก้อน ไทเกอร์',
    'การยิงประตูบล็อคเชน',
    'บาคาร่าบล็อคเชนสุดเซ็กซี่'
  ];

  const gameProviders = [
    'จีคลับ',
    'ดับเบิลยูเอ็ม',
    'เรา',
    'ไอดีเอ็น',
    'ซาบา',
    'CMD368',
    'ซีอาร์',
    'WS168',
    'ดีบีอี'
  ];

  return (
    <div className="space-y-4">
      {/* Game Settings */}
      <Card className="shadow-sm border">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-800">บาคาร่า</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Water Reduction Setting */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">การตั้งค่าการลดน้ำ: (0.7)</label>
            <Input
              type="text"
              value={waterReduction}
              onChange={(e) => setWaterReduction(e.target.value)}
              className="h-9 text-sm border-gray-300"
            />
          </div>

          {/* Max Bet Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">เดิมพันสูงสุด: (100,000)</label>
              <Input
                type="text"
                value={maxBet1}
                onChange={(e) => setMaxBet1(e.target.value)}
                className="h-9 text-sm border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">เดิมพันสูงสุด: (20,000,000)</label>
              <Input
                type="text"
                value={maxBet2}
                onChange={(e) => setMaxBet2(e.target.value)}
                className="h-9 text-sm border-gray-300"
              />
            </div>
          </div>

          {/* Min Bet Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">เดิมพันขั้นต่ำ: (50)</label>
              <Input
                type="text"
                value={minBet}
                onChange={(e) => setMinBet(e.target.value)}
                className="h-9 text-sm border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">เดิมพันขั้นต่ำหลายรายการ: (50)</label>
              <Input
                type="text"
                value={minMultiBet}
                onChange={(e) => setMinMultiBet(e.target.value)}
                className="h-9 text-sm border-gray-300"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Types List */}
      <Card className="shadow-sm border">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-800">ประเภทเกม</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {gameTypes.map((gameType, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-sm text-gray-700">{gameType}</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameSettings;
