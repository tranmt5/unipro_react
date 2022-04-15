import MoreVertIcon from '@material-ui/icons/MoreVert';
import WorkspacesIcon from '@material-ui/icons/Workspaces';
import SuperscriptIcon from '@material-ui/icons/Superscript';
import WifiProtectedSetupIcon from '@material-ui/icons/WifiProtectedSetup';
import FunctionsIcon from '@material-ui/icons/Functions';
import CurrencyExchangeIcon from '@material-ui/icons/PriceCheck';

export const BOOTCAMPCOURSE = [
  'FRONTENT',
  'BACKEND',
  'FULLSTACK',
  'MOBILE DEVELOPER',
  'DATA SCIENCE & AI',
  'COMPUTER NETWORKS & SECURITY'
];

export const COURSEDETAILS = [
  {
    title: 'Front-end Developer',
    image: '/static/course/course_bootcampservice_frontend.jpeg',
    description:
      'Các lập trình viên front-end chịu trách nhiệm cho giao diện của một trang web và kiến trúc những trải nghiệm của người dùng.',
    caption: 'Chương trình Front-end chuyên sâu.',
    target:
      'Nắm vững các kiến thức về lập trình Front-end, có thể tự xây dựng và thiết kế một giao diện web đáp ứng nhu cầu của khách hàng, đồng thời xây dựng được hình ảnh thương hiệu trên nền tảng công nghệ số.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>JavaScript ES6</li>
            <li>VueJS</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>ReactJS cơ bản</li>
            <li>ReactJS nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Angular cơ bản</li>
            <li>Angular nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  },
  {
    title: 'Back-end Developer',
    image: '/static/course/course_bootcampservice_backend.png',
    description:
      'BackEnd là tất cả những phần hỗ trợ hoạt động của website hoặc ứng dụng mà người dùng không thể nhìn thấy được.',
    caption: 'Chương trình Back-end chuyên sâu.',
    target:
      'Nắm vững các kiến thức về lập trình back-end, có thể xây dựng ngay hệ thống chức năng website từ phía người dùng đến sever.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>OOP with Java</li>
            <li>Java Desktop</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>Java Servlet cơ bản</li>
            <li>ava Servlet nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Java Spring MVC</li>
            <li>Java Spring Boot</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  },
  {
    title: 'Full-stack Developer',
    image: '/static/course/course_bootcampservice_fullstack.jpg',
    description:
      'Các lập trình viên cần phải có nhiều kỹ năng khác nhau và có kiến thức tổng hợp, tức là cả front end lẫn back end.',
    caption: 'Chương trình Full-stack chuyên sâu.',
    target:
      'Nắm vững các kiến thức về lập trình cơ bản và chuyên sâu, học viên có thể tham gia ứng tuyển trở thành lập trình viên sau khi kết thúc khóa học với mức lương khá cao đến từ các công ty Công nghệ.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>Ngôn ngữ C</li>
            <li>Front-end HTML5, CSS3</li>
            <li>Font-end Bootstrap</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>OPP với C#, .NET</li>
            <li>Cơ sở dữ liệu</li>
            <li>Lập trình ứng dụng Windows</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <MoreVertIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Cấu trúc giải thuật</li>
            <li>Web API</li>
            <li>Androi cơ bản</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 4',
        subject: (
          <ul>
            <li>Web ASP.NET</li>
            <li>DepOps</li>
            <li>Tối ưu Website</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <MoreVertIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 5',
        subject: (
          <ul>
            <li>Dự án tốt nghiệp</li>
            <li>UI/UX</li>
            <li>Tư duy khời nghiệp</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  },
  {
    title: 'Mobile Developer',
    image: '/static/course/course_bootcampservice_mobile.jpg',
    description:
      'Đây là một thuật ngữ chuyên môn để chỉ những lập trình viên phát triển ứng dụng trên thiết bị di động.',
    caption: 'Chương trình Mobile Developer chuyên sâu.',
    target:
      'Nắm vững các kiến thức về lập trình Mobile, có thể tự xây dựng và phát triển các ứng dụng trên điện thoại hoặc làm những công việc liên quan đến lập trình.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>Flutter cơ bản/ nâng cao</li>
            <li>Reactnative cơ bản/ nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>React native</li>
            <li>React native nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Swift iOs cơ bản</li>
            <li>Swift iOs nâng cao</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  },
  {
    title: 'Khoa học dữ liệu & Trí tuệ nhân tạo',
    image: '/static/course/course_data_science_ai.jpg',
    description:
      'Lập trình viên phát triển ứng dụng làm thông minh hóa các hệ thống sản xuất và trong các ứng dụng đời sống.',
    caption: 'Chương trình Khoa học dữ liệu và trí tuệ nhân tạo.',
    target:
      'Nắm vững các kiến thức thiết kế xây dựng các hệ thống khai thác, xử lý dữ liệu… cũng như phát triển những hệ thống trí tuệ nhân tạo.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>Tư duy phân tích dữ liệu & Thực hành với Excel</li>
            <li>Lưu trữ dữ liệu lớn với MSSQL và Google Big Query</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>Lập trình Python cơ bản</li>
            <li>Lập trình Python trong khoa học dữ liệu</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Trình bày dữ liệu với Google Data Studio</li>
            <li>Trình bày dữ liệu với PowerBI</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  },
  {
    title: 'Mạng máy tính & An toàn thông tin',
    image: '/static/course/course_computer_network_security.jpg',
    description:
      'Đây là một thuật ngữ chuyên môn để chỉ những lập trình viên đảm bảo an toàn thông tin người dùng internet.',
    caption: 'Chương trình Mạng máy tính và An toàn thông tin.',
    target:
      'Đảm bảo được độ an toàn thông tin người dùng không chỉ dừng lại ở việc bảo vệ hệ thống máy tính khỏi sự xâm nhập bất hợp pháp của hacker, mà đòi hỏi độ an toàn thông tin trong truyền nhận dữ liệu và lưu trữ.',
    course: [
      {
        semester: 'Học kỳ 1',
        subject: (
          <ul>
            <li>Windows Server OS</li>
            <li>Linux OS</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WorkspacesIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 2',
        subject: (
          <ul>
            <li>Networking (CCNA)</li>
            <li>Mikrotik RouterOS</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <SuperscriptIcon color="secondary" />
      },
      {
        semester: 'Học kỳ 3',
        subject: (
          <ul>
            <li>Web security</li>
            <li>Digital forensics</li>
          </ul>
        ),
        time: '2 tháng',
        icon: <WifiProtectedSetupIcon color="secondary" />
      }
    ]
  }
];

export const TUITIONS = [
  {
    title: [
      'Giai đoạn',
      'Học kỳ 1',
      'Học kỷ 2',
      'Học kỳ 3',
      'Học kỳ 4',
      'Học kỳ 5',
      <>
        <FunctionsIcon color="success" fontSize="large" />
      </>,
      <>
        <CurrencyExchangeIcon color="error" fontSize="large" />
      </>
    ],
    option_1: ['Đóng theo 1 học kỳ', 6000000, 6000000, 6000000, 6000000, 6000000, 30000000, '0%'],
    option_2: ['Đóng theo 2 học kỳ', 10200000, 10200000, 5100000, 25500000, '15%'],
    option_3: ['Đóng theo 3 học kỳ', 14400000, 9600000, 24000000, '20%'],
    option_4: ['Đóng theo trọn khóa (5 kỳ)', 22500000, 22500000, '25%']
  }
];
