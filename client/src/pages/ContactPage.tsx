import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Users, Play, Calendar } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const ContactPage = () => {
  const [inquiryType, setInquiryType] = useState("");
  const [assignedTeam, setAssignedTeam] = useState("");

  const teamMapping: Record<string, string> = {
    "전략 컨설팅": "전략팀 (김성욱 이사)",
    "크리에이티브 제작": "크리에이티브팀 (박민수 이사)",
    "데이터 분석": "데이터팀 (이지영 이사)",
    "파트너십": "비즈니스팀",
    "기타": "고객지원팀"
  };

  const handleInquiryTypeChange = (value: string) => {
    setInquiryType(value);
    setAssignedTeam(teamMapping[value] || "");
  };

  return (
    <div className="page-transition">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              프로젝트 문의부터 파트너십까지, 언제든 연락주세요.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">지능형 문의 양식</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">이름 *</Label>
                    <Input id="name" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="company">회사명</Label>
                    <Input id="company" className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">이메일 *</Label>
                  <Input id="email" type="email" required className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="inquiry-type">문의 유형</Label>
                  <Select onValueChange={handleInquiryTypeChange}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="전략 컨설팅">전략 컨설팅</SelectItem>
                      <SelectItem value="크리에이티브 제작">크리에이티브 제작</SelectItem>
                      <SelectItem value="데이터 분석">데이터 분석</SelectItem>
                      <SelectItem value="파트너십">파트너십</SelectItem>
                      <SelectItem value="기타">기타</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Auto-assigned team display */}
                {assignedTeam && (
                  <Card className="bg-secondary/10">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <Users className="text-secondary mr-3 h-5 w-5" />
                        <span className="text-sm font-medium">
                          자동 배정 팀: <span className="font-bold text-primary">{assignedTeam}</span>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                <div>
                  <Label htmlFor="budget">예상 예산 (월)</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10m">1천만원 미만</SelectItem>
                      <SelectItem value="10m-50m">1천만원 - 5천만원</SelectItem>
                      <SelectItem value="50m-100m">5천만원 - 1억원</SelectItem>
                      <SelectItem value="over-100m">1억원 이상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">상세 문의 내용</Label>
                  <Textarea 
                    id="message"
                    rows={4}
                    placeholder="프로젝트 목표, 타임라인, 특별 요구사항 등을 자세히 적어주세요."
                    className="mt-2"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover-lift">
                  문의 보내기
                </Button>
              </form>
            </div>

            {/* Office Info & Virtual Tour */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-6">오시는 길</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="text-accent mt-1 mr-3 h-5 w-5" />
                        <div>
                          <div className="font-medium">{COMPANY_INFO.address}</div>
                          <div className="text-sm text-muted-foreground">{COMPANY_INFO.addressDetail}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-accent mr-3 h-5 w-5" />
                        <span>{COMPANY_INFO.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-accent mr-3 h-5 w-5" />
                        <span>{COMPANY_INFO.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="text-accent mr-3 h-5 w-5" />
                        <span>{COMPANY_INFO.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Virtual Office Tour */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">가상 사무실 투어</h3>
                <div className="relative bg-muted rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450" 
                    alt="Modern collaborative office workspace" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button size="icon" className="w-16 h-16 rounded-full bg-white text-primary hover:bg-white/90">
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Card>
                      <CardContent className="p-3">
                        <div className="text-sm font-medium text-primary">360° VR 투어 체험하기</div>
                        <div className="text-xs text-muted-foreground">실제 업무 환경과 협업 공간을 확인하세요</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">빠른 연락</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl flex flex-col items-center">
                    <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="text-sm font-medium">카카오톡</span>
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl flex flex-col items-center">
                    <Calendar className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">미팅 예약</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
