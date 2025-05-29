import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-lg mr-3"></div>
              <span className="text-xl font-bold">DataViz Agency</span>
            </div>
            <p className="text-blue-100 text-sm">
              3D 데이터 시각화로 마케팅 혁신는 전문 에이전시입니다.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  전략 컨설팅
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  크리에이티브 제작
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  데이터 분석
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  성과 최적화
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">회사</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  채용정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  파트너십
                </a>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-white transition-colors"
                >
                  블로그
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>02-1234-5678</li>
              <li>hello@dataviz-agency.co.kr</li>
              <li>서울 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-100">
          <p>&copy; 2024 DataViz Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
