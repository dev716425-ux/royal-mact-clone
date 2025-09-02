import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SystemAnnouncement = () => {
  const [memberAnnouncementExpanded, setMemberAnnouncementExpanded] = useState(true);
  const [systemAnnouncementExpanded, setSystemAnnouncementExpanded] = useState(true);

  return (
    <div className="space-y-4">
      {/* Member Announcement */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">ประกาศสำหรับสมาชิก</CardTitle>
            <button onClick={() => setMemberAnnouncementExpanded(!memberAnnouncementExpanded)}>
              {memberAnnouncementExpanded ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>
        </CardHeader>
        {memberAnnouncementExpanded && (
          <CardContent>
            <div className="bg-white rounded-lg p-4 border">
              <p className="text-sm text-gray-700 leading-relaxed">
                เนื่องจากการบำรุงรักษาระบบฐานข้อมูล อีเกม "RSG" จะสิ้นสุดก่อนเวลา 11:00 น. (GMT+8) ของวันที่ 1 กันยายน เวลาเริ่มเกมจะประกาศผ่านระบบแจ้งเตือน ขออภัยในความไม่สะดวกที่เกิดขึ้น!
              </p>
              <div className="text-right mt-3 text-xs text-gray-500">
                2025-08-29 20:15:21
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* System Announcement */}
      <Card className="shadow-sm border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium text-gray-800">ประกาศระบบ</CardTitle>
            <button onClick={() => setSystemAnnouncementExpanded(!systemAnnouncementExpanded)}>
              {systemAnnouncementExpanded ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>
        </CardHeader>
        {systemAnnouncementExpanded && (
          <CardContent>
            <div className="bg-white rounded-lg p-4 border">
              <p className="text-sm text-gray-500">ไม่พบข้อมูล</p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default SystemAnnouncement;
