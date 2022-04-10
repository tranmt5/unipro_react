import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import PoolIcon from '@material-ui/icons/Pool';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export const SLIDERS = [
  {
    title: 'GÓC HỌC TẬP',
    caption: 'Học tập theo cặp, cùng nhau phát triển',
    image: '/static/home/home_slider_developer.jpg'
  },
  {
    title: 'TRỞ THÀNH DEVELOPER',
    caption: 'Làm việc ngay sau khi hoàn thành khóa học',
    image: '/static/home/home_slider_code.jpg'
  },
  {
    title: 'NGÔI NHÀ CHUNG',
    caption: 'Môi trường thân thiện kết hợp hoạt động thể thao.',
    image: '/static/home/home_slider_friendly.jpg'
  },
  {
    title: 'VỊ TRÍ',
    caption: 'Gần trường đại học FPT.',
    image: '/static/home/home_slider_fpt_school.png'
  }
];

export const SERVICES = [
  {
    title: 'Hình ảnh học viên tại UNIPRO',
    caption: 'Hoạt động khóa học',
    image: '/static/home/home_service_learning.jpg',
    serviceDetails: [
      {
        title: 'Tiêu chí hướng tới',
        descripiton:
          'Tạo môi trường tốt nhất cho học viên học tập và có việc làm ngay sau khi hoàn thành khóa học'
      },
      {
        title: 'Rèn luyện kỹ năng',
        descripiton:
          'Để có được đam mê, hãy tiến từng bước nhỏ từ giải bài tập cho tới làm các dự án, rồi làm nhiều thứ hay ho hơn để nâng cao khả năng lập trình của mình.'
      },
      {
        title: 'Vượt mọi khó khăn',
        descripiton:
          'Không bơ phờ vì triền miên thiếu ngủ, không chán nản bên những ký tự khô khan, học viên luôn tràn đầy sức sống bởi có bí kíp tìm niềm vui từ những ngày làm bạn với các dãy code dài miên man.'
      }
    ]
  },
  {
    title: 'Xây dựng mô hình Bootcamp',
    caption: 'Coding Bootcamp',
    image: '/static/home/home_service_bootcamp.jpg',
    serviceDetails: [
      {
        title: 'Thời gian',
        descripiton:
          'Chỉ mất khoảng thời gian từ 6-8 tháng, học viên tham gia khóa học Cording Bootcamp tại Unipro Center sẽ trở thành một lập trình viên thực chiến.'
      },
      {
        title: 'Chi phí',
        descripiton: 'Rất thấp, chỉ bằng 1/4 chi phí tại các giảng đường Đại học.'
      },
      {
        title: 'Kiến thức',
        descripiton: (
          <>
            Các môn học tập trung chuyên sâu
            <b> vừa học-vừa hành</b>.
          </>
        )
      }
    ]
  },
  {
    title: 'Thực hành tại phòng Lab',
    caption: 'Lab office',
    image: '/static/home/home_service_lab.jpg',
    serviceDetails: [
      {
        title: 'Mục tiêu',
        descripiton: 'Tạo ra các ứng dụng, phần mềm có thể mang tới giá trị cho xã hội.'
      },
      {
        title: 'Trang thiết bị phòng Lab',
        descripiton:
          'Dàn máy cấu hình "khủng", điều hòa mát lạnh lại có view xanh tươi thích hợp cho những ý tưởng mới.'
      }
    ]
  }
];

export const CARDS = [
  {
    icon: '/static/icons/ic_customer.svg',
    title: <>Mentee</>,
    description:
      'Mentee là những học viên mới, chưa có nhiều trải nghiệm. Họ muốn học tập và chuyển sang lĩnh vực IT.'
  },
  {
    icon: '/static/icons/ic_store.svg',
    title: <>Mentor</>,
    description:
      'Mentor đóng vai trò cố vấn, hướng dẫn cho mentee trong quá trình học tập và phát triển.'
  },
  {
    icon: '/static/icons/ic_headless.svg',
    title: <>Master</>,
    description:
      'Master là người có chuyên môn sâu, kinh nghiệm lâu năm trong lĩnh vực IT, sẽ là người định hướng học viên kỹ năng và con đường đến với nhà tuyển dụng.'
  }
];

export const METHODS = [
  {
    title: 'Project-Based Learning',
    icon: <LibraryBooksIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Học tập dựa trên dự án'
  },
  {
    title: 'Practice-Oriented Class',
    icon: <LaptopMacIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Lớp học định hướng thực hành'
  },
  {
    title: 'Peer Learning Method',
    icon: <PeopleAltIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Phương pháp học theo cặp'
  },
  {
    title: 'Product Development',
    icon: <TrendingUpIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Phát triển sản phẩm'
  },
  {
    title: 'Pro-Active Working Environment',
    icon: <PoolIcon color="secondary" />,
    time: <DoneOutlineIcon color="success" />,
    description: 'Môi trường làm việc chủ động'
  }
];

export const FEEDBACKS = [
  {
    title: '',
    mentee: 'Lê Duy Thuận',
    image: '/static/home/home_feedback_mentee_1.jpg',
    rating: 4,
    feedbackDetails: [
      {
        title: 'Khả năng truyền đạt của giảng viên',
        descripiton:
          'Thầy giảng bài rất dễ tiếp thu, toàn những kiến thức hay cùng những kinh nghiệm của thầy không ở đâu mà tìm được.'
      }
    ]
  },
  {
    title: '',
    mentee: 'Nguyễn Trần Thanh Tâm',
    image: '/static/home/home_feedback_mentee_2.jpg',
    rating: 5,
    feedbackDetails: [
      {
        title: 'Môi trường học tập',
        descripiton:
          'Em học ở đây đã được 3 tháng, giáo viên vui vẻ nhiệt tình, không khí lớp học lúc nào cũng náo nhiệt chứ không tĩnh mịch như em nghĩ lúc đầu.'
      }
    ]
  },
  {
    title: '',
    mentee: 'Nguyễn Chí Thiện',
    image: '/static/home/home_feedback_mentee_3.jpg',
    rating: 4,
    feedbackDetails: [
      {
        title: '2 tháng thành developer',
        descripiton:
          'Học ở đây mãi không chán, học tới đâu nắm tới đó, trước giờ tự học mãi mà không có tác dụng gì, không ngờ đến lớp mới 2 tháng đã thành thạo được lập trình. Quá tuyệt vời.'
      }
    ]
  }
];
