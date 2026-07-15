export const assignments = [
  {
    id: 1,
    baiTap: "Bài 1",
    title: "Thực hành thao tác với tệp tin và thư mục",
    icon: "📁",
    tags: ["Hệ điều hành Windows", "Quản lý tệp tin", "File Explorer"],
    pdfLink: "https://drive.google.com/file/d/1c0axvW9LuU6dFlBoaNPNbEaxsCHfiAgQ/view?usp=drive_link",
    goal: "Nắm vững các thao tác cơ bản để tổ chức và quản lý tệp tin, thư mục trên hệ điều hành Windows thông qua File Explorer.",
    summary: "Thực hành các kỹ năng tạo, đổi tên, sao chép, di chuyển và xóa tệp tin, thư mục. Hiểu cách quản lý dữ liệu an toàn như phân biệt giữa xóa tạm thời (vào Thùng rác) và xóa vĩnh viễn.",
    sections: [
      {
        title: "Mục tiêu bài tập",
        content: "Thao tác cơ bản với tệp tin và thư mục trên hệ điều hành Windows. Bài tập giúp sinh viên nắm vững các kỹ năng quản lý file, thư mục — nền tảng quan trọng trong học tập và làm việc với máy tính."
      },
      {
        title: "Các bước thực hiện",
        steps: [
          { step: "01", title: "Mở File Explorer & Truy cập ổ đĩa", desc: "Nhấn tổ hợp phím Windows + E. Truy cập This PC, sau đó mở một ổ đĩa không phải hệ thống (như ổ D: hoặc E:)." },
          { step: "02", title: "Tạo thư mục mới", desc: "Nhấp chuột phải -> New -> Folder để tạo thư mục với cú pháp ThucHanh_hotensinhvien (VD: ThucHanh_NguyenVanA)." },
          { step: "03", title: "Tạo và đổi tên tệp tin", desc: "Tạo tệp văn bản GhiChu.txt (New -> Text Document). Sau đó nhấp chuột phải, chọn Rename để đổi thành GhiChuQuanTrong.txt." },
          { step: "04", title: "Tạo thư mục con", desc: "Truy cập vào thư mục thực hành vừa tạo, tiếp tục tạo thêm một thư mục con với tên là TaiLieu." },
          { step: "05", title: "Sao chép tệp tin (Copy & Paste)", desc: "Dùng lệnh Copy (Ctrl + C) tệp GhiChuQuanTrong.txt, sau đó truy cập vào thư mục TaiLieu và Paste (Ctrl + V)." },
          { step: "06", title: "Di chuyển tệp tin (Cut & Paste)", desc: "Tạo thêm tệp DiChuyen.txt. Dùng lệnh Cut (Ctrl + X) tệp này và Paste (Ctrl + V) vào thư mục TaiLieu để chuyển vị trí." },
          { step: "07", title: "Xóa thông thường và xóa vĩnh viễn", desc: "Thực hành Delete để xóa tệp (vào Thùng rác) và nhấn giữ Shift + Delete để xóa tệp vĩnh viễn mà không qua Thùng rác." },
        ]
      },
      {
        title: "Kết quả đạt được",
        highlights: [
          { emoji: "✅", text: "Thành thạo thao tác tạo, đổi tên, sao chép (Copy) và di chuyển (Cut) thư mục/tệp tin." },
          { emoji: "✅", "text": "Hiểu sự khác biệt giữa xóa thông thường (Recycle Bin) và xóa vĩnh viễn (Shift+Delete)." },
          { emoji: "✅", text: "Xây dựng thói quen tổ chức và quản lý dữ liệu máy tính khoa học." }
        ]
      }
    ]
  },
  {
    id: 2,
    baiTap: "Bài 2",
    title: "Tìm kiếm và Đánh giá Tài liệu Tham khảo",
    icon: "🔍",
    tags: ["Tìm kiếm tài liệu", "Đánh giá nguồn tin", "AI trong giáo dục", "Ngôn ngữ Anh"],
    pdfLink: "https://drive.google.com/file/d/1fxynnFY_cd43xhbHzOYWKjF6UClBiWNA/view?usp=drive_link",
    goal: "Thực hành kỹ năng tìm kiếm, tổng hợp danh mục tài liệu tham khảo và đánh giá khách quan độ tin cậy của các nguồn tin học thuật.",
    summary: "Lựa chọn chủ đề nghiên cứu về tác động của AI đến kỹ năng viết của sinh viên Ngôn ngữ Anh. Tiến hành thu thập 11 tài liệu tham khảo đa dạng và lập bảng phân tích ưu/nhược điểm, đánh giá độ tin cậy của các nguồn.",
    sections: [
      {
        title: "Chủ đề nghiên cứu",
        content: "Tác động của trí tuệ nhân tạo (ChatGPT, Gemini, DeepSeek) đến kỹ năng viết (writing skill) của sinh viên chuyên ngành ngoại ngữ. Ngành học: Ngôn ngữ Anh."
      },
      {
        title: "Danh mục tài liệu tham khảo",
        highlights: [
          { emoji: "📄", text: "Bài báo khoa học (Tạp chí Q1, Tạp chí chuyên ngành VNU, TESOL, v.v.)" },
          { emoji: "📚", text: "Sách chuyên khảo (Routledge, Bloomsbury Academic)" },
          { emoji: "📈", text: "Báo cáo kỹ thuật (OpenAI, GitHub)" },
          { emoji: "🌐", text: "Nguồn mở và tổ chức quốc tế (UNESCO, ULIS Library)" }
        ]
      },
      {
        title: "Đánh giá độ tin cậy (Thang điểm 10)",
        steps: [
          { step: "01", title: "Sullivan (2024) - 10 điểm", desc: "Bài báo Q1. Ưu điểm: Chỉ số trích dẫn tăng nhanh, tác giả uy tín trong giới TESOL." },
          { step: "02", title: "Wang (2025) - 9 điểm", desc: "Bài báo Q1. Ưu điểm: Phương pháp thực nghiệm chặt chẽ, đăng trên tạp chí đầu ngành. Nhược điểm: Thuật ngữ chuyên sâu." },
          { step: "03", title: "Nguyen & Le (2025) - 8 điểm", desc: "Bài báo VNU. Ưu điểm: Sát thực tế bối cảnh Việt Nam (VNU-ULIS)." },
          { step: "04", title: "UNESCO (2023) - 8 điểm", desc: "Nguồn mở. Ưu điểm: Hướng dẫn mang tính quy chuẩn toàn cầu, đa chiều. Nhược điểm: Mang tính định hướng, thiếu số liệu thực nghiệm." },
          { step: "05", title: "Hockly (2023) - 7 điểm", desc: "Sách chuyên khảo. Ưu điểm: Hệ thống lý thuyết bài bản về năng lực số. Nhược điểm: Tốc độ cập nhật chậm hơn so với bài báo." }
        ]
      },
      {
        title: "Kết quả đạt được",
        content: "Hoàn thiện danh mục gồm 11 tài liệu tham khảo chuẩn chỉnh. Đã tiến hành phân tích và đánh giá mức độ tin cậy của 5 nguồn tài liệu trọng tâm, làm cơ sở lý thuyết vững chắc cho việc triển khai nghiên cứu."
      }
    ]
  },
  {
    id: 3,
    baiTap: "Bài 3",
    title: "Ứng dụng Prompt Engineering trong học tập",
    icon: "🤖",
    tags: ["Prompt Engineering", "AI", "Ngôn ngữ Anh", "Kỹ năng số"],
    pdfLink: "https://drive.google.com/file/d/1fzyoJMa7glW0KEK8QGP2on0SlUM7x3ir/view?usp=drive_link",
    goal: "Nắm vững kỹ năng thiết kế câu lệnh (Prompt Engineering) từ cơ bản đến nâng cao để khai thác tối đa hiệu năng của các Mô hình Ngôn ngữ Lớn (LLMs) trong nghiên cứu chuyên ngành.",
    summary: "Phân tích 3 tác vụ học tập cốt lõi và thực hành xây dựng các phiên bản prompt. Ứng dụng các kỹ thuật chuyên sâu (Role-play, Chain-of-Thought, Few-shot) vào các môn học thuộc chuyên ngành Ngôn ngữ Anh.",
    sections: [
      {
        title: "Phân tích tác vụ học tập",
        content: "Nghiên cứu bản chất, thách thức và mục tiêu của 3 tác vụ chính: (1) Tóm tắt tài liệu học thuật (lọc nhiễu nhưng không mất logic), (2) Giải thích khái niệm phức tạp (bình dân hóa ngôn ngữ khoa học mà vẫn chuẩn xác), (3) Tạo bộ câu hỏi ôn tập (thiết kế câu hỏi có độ phân hóa, vận dụng cao thay vì chỉ học thuộc)."
      },
      {
        title: "3 Cấp độ thiết kế Prompt",
        steps: [
          { step: "🔵", title: "Prompt Cơ bản", desc: "Câu lệnh ngắn gọn (VD: 'Tóm tắt văn bản sau') → Đầu ra chung chung, thiếu cấu trúc và chưa đáp ứng đủ tiêu chuẩn học thuật." },
          { step: "🟡", title: "Prompt Cải tiến", desc: "Bổ sung tham số về định dạng, độ dài, phân đoạn (VD: 'Tóm tắt khoảng 250 từ, chia thành mục Bối cảnh, Phương pháp...') → Đầu ra rõ ràng, có cấu trúc." },
          { step: "🟢", title: "Prompt Nâng cao", desc: "Kết hợp đa kỹ thuật: Phân vai (Role-play), Suy luận từng bước (Chain-of-Thought), Few-shot và Ẩn dụ (Analogy) → Đầu ra có chiều sâu, giải quyết triệt để bài toán chuyên môn." },
        ]
      },
      {
        title: "Các tác vụ thực nghiệm (Ngành Ngôn ngữ Anh)",
        highlights: [
          { emoji: "📄", text: "Tóm tắt tài liệu: Đóng vai 'Chuyên gia thẩm định', dùng Chain-of-Thought yêu cầu AI liệt kê 5 luận điểm rồi mới tóm tắt bằng văn phong học thuật." },
          { emoji: "💡", text: "Giải thích khái niệm: Áp dụng kỹ thuật Few-shot và Analogy (phép ẩn dụ) để giải thích khái niệm 'Speech Acts' phức tạp thành ngôn ngữ dễ hiểu cho sinh viên." },
          { emoji: "📝", text: "Tạo câu hỏi ôn tập: Yêu cầu tạo 10 câu trắc nghiệm vận dụng cao về 'Ngữ nghĩa học' (quan hệ từ vựng: đồng nghĩa, trái nghĩa), bắt buộc có đáp án và giải thích chi tiết." },
        ]
      },
      {
        title: "Kết luận",
        content: "Prompt Engineering không chỉ là việc đặt câu hỏi, mà là một kỹ năng tư duy hệ thống. Việc áp dụng đúng kỹ thuật giúp kiểm soát chặt chẽ đầu ra của AI, biến AI từ một công cụ tra cứu thông thường thành một trợ lý học thuật đắc lực và đáng tin cậy."
      }
    ]
  },
  {
  id: 4,
  baiTap: "Bài 4",
  title: "Sử dụng công cụ hợp tác trực tuyến & Quản lý dự án",
  icon: "🤝",
  tags: ["Quản lý dự án", "Làm việc nhóm", "Hợp tác số"],
  pdfLink: "https://drive.google.com/file/d/1kJF66JeemXQEaNqI8SoqWw4-D-yrBU2h/view?usp=drive_link",
  goal: "Minh chứng năng lực sử dụng các công cụ trực tuyến để quản lý dự án và hợp tác nhóm hiệu quả trong thời gian ngắn.",
  summary: "Áp dụng thực tế các nền tảng Trello, Google Docs, Drive và Zalo vào dự án 'Xây dựng kế hoạch truyền thông sản phẩm X'. Đảm bảo tiến độ công việc cá nhân và tối ưu hóa thời gian trao đổi của toàn nhóm.",
  sections: [
    {
      title: "Bối cảnh dự án",
      content: "Tham gia với vai trò thành viên trong dự án 'Xây dựng kế hoạch truyền thông sản phẩm X' (kéo dài 1 tuần). Nhiệm vụ trọng tâm là nghiên cứu thị trường, viết Mục 2 (Phân tích đối thủ cạnh tranh) và tổng hợp định hướng nội dung cho dự án."
    },
    {
      title: "Hệ thống công cụ sử dụng",
      steps: [
        { step: "📋", title: "Trello (Quản lý dự án)", desc: "Tạo checklist chi tiết cho phần 'Nghiên cứu thị trường', tận dụng tính năng Assign (Giao việc) và Due Date (Hạn chót), gắn link Google Drive vào thẻ để nhóm tra cứu nhanh." },
        { step: "📝", title: "Google Docs (Soạn thảo tài liệu)", desc: "Trực tiếp biên soạn nội dung phân tích đối thủ, sử dụng tính năng Nhận xét (Comment) để trao đổi và phản hồi ý kiến với các thành viên." },
        { step: "📁", title: "Google Drive (Lưu trữ & Chia sẻ)", desc: "Quy hoạch và tạo cây thư mục lưu trữ cá nhân/nhóm một cách logic, đảm bảo tải lên các tệp đúng định dạng giúp dễ dàng quản lý tài nguyên." },
        { step: "💬", title: "Zalo (Giao tiếp nhóm)", desc: "Thường xuyên nhắn tin cập nhật tiến độ, tag tên thành viên liên quan để duyệt nội dung (VD: @Design), và tổ chức họp Voice Call định kỳ." }
      ]
    },
    {
      title: "Kết quả & Tự đánh giá",
      highlights: [
        { emoji: "✅", text: "Hoàn thành 100% công việc đúng hạn, không gây nghẽn tiến độ (bottleneck) cho khâu thiết kế hình ảnh tiếp theo." },
        { emoji: "⚡", text: "Giao tiếp hiệu quả trên Zalo giúp giảm thiểu 80% thời gian họp hành trực tiếp không cần thiết." },
        { emoji: "🎯", text: "Bài học rút ra: Cần chú ý cập nhật trạng thái thẻ từ 'Doing' sang 'Done' ngay lập tức trên Trello để đồng bộ thời gian thực tốt hơn." }
      ]
    }
  ]
},
  {
  id: 5,
  baiTap: "Bài 5",
  title: "Sáng tạo nội dung số với hệ sinh thái AI",
  icon: "🏙️",
  tags: ["AI tạo sinh", "Infographic", "Thuyết trình"],
  pdfLink: "https://drive.google.com/file/d/1m247nksZH8PVW-GeuczcJ6vcY3CjdB-e/view?usp=drive_link",
  goal: "Minh chứng năng lực kết hợp các công cụ AI tạo sinh để sản xuất sản phẩm sáng tạo hoàn chỉnh (từ khâu lên ý tưởng đến thiết kế thị giác).",
  summary: "Thực hiện dự án 'Kỷ Nguyên Mới: Thành Phố Thông Minh 2030' (gồm Slide và Infographic) thông qua quy trình tương tác 50-50 giữa tư duy con người và hệ sinh thái AI (Google Gemini, Midjourney, Canva AI).",
  sections: [
    {
      title: "Tổng quan dự án",
      content: "Sản xuất bộ Infographic kết hợp 5 slide thuyết trình về chủ đề 'Kỷ Nguyên Mới: Thành Phố Thông Minh 2030'. Dự án tập trung khai thác 3 yếu tố cốt lõi: Năng lượng xanh, Giao thông tự hành và AI quản lý vận hành."
    },
    {
      title: "Quy trình thực hiện & Tích hợp",
      steps: [
        { step: "01", title: "Lên ý tưởng (Google Gemini)", desc: "AI tạo bộ khung cấu trúc 5 slide. Can thiệp của con người: Tinh chỉnh lại nội dung lý thuyết, bổ sung các số liệu thực tế giả định (như giảm 40% khí thải) để sản phẩm tăng tính thuyết phục." },
        { step: "02", title: "Tạo hình ảnh (Midjourney)", desc: "Sử dụng prompt chi tiết xuất ảnh concept art 8K mang phong cách cinematic. Can thiệp của con người: Dùng tính năng Generative Fill (Photoshop) mở rộng canvas, tạo khoảng trống (negative space) để chèn text." },
        { step: "03", title: "Thiết kế layout (Canva AI)", desc: "Sử dụng Magic Design tự động tạo 5 layout phối màu chuẩn theo ảnh gốc. Can thiệp của con người: Sửa lỗi typography tiếng Việt (đổi sang Montserrat/Be Vietnam Pro), căn chỉnh lại icon và logo." }
      ]
    },
    {
      title: "Bài học & Đánh giá phân tích",
      highlights: [
        { emoji: "🔄", text: "Quy trình sáng tạo mới: Chuyển từ tuyến tính sang tương tác (Iterative). Đóng vai trò Đạo diễn, dùng AI làm trợ lý giúp giảm 70% thời gian thực thi kỹ thuật, tăng 30% thời gian tư duy." },
        { emoji: "⚠️", text: "Hạn chế của AI: Văn bản thường chung chung thiếu cảm xúc, dễ lỗi chi tiết nhỏ ở hình ảnh (vd: bánh xe méo) và Canva AI chưa tối ưu tốt cho font tiếng Việt." },
        { emoji: "⚖️", text: "Vấn đề đạo đức: Cần lưu tâm đến bản quyền dữ liệu (Copyright), tránh việc lười biếng tư duy bê nguyên 100% của AI và luôn cần sự minh bạch (Transparency) khi xuất bản." }
      ]
    }
  ]
},
  {
  id: 6,
  baiTap: "Bài 6",
  title: "Sử dụng AI có trách nhiệm và đạo đức trong học tập",
  icon: "⚖️",
  tags: ["Đạo đức AI", "Liêm chính học thuật", "Fact-check"],
  pdfLink: "https://drive.google.com/file/d/1faBOKpHujCy2WfOX4ODQrnqZSr30VYXC/view?usp=drive_link",
  goal: "Phát triển kỹ năng ứng dụng AI một cách minh bạch, có trách nhiệm, tuân thủ các chính sách học thuật và bảo vệ tư duy độc lập.",
  summary: "Thực hành dùng ChatGPT để lập dàn ý bài luận về tâm lý Gen Z. Phân tích ranh giới đạo đức, áp dụng quy trình 3 bước xử lý thông tin (Fact-check, Bản địa hóa, Cá nhân hóa) và thiết lập Bộ 6 nguyên tắc cá nhân khi dùng AI.",
  sections: [
    {
      title: "Thực hành & Quy trình xử lý kết quả AI",
      steps: [
        { step: "01", title: "Kiểm chứng (Fact-check)", desc: "Không tin hoàn toàn vào AI. Chủ động tra cứu lại các khái niệm (ví dụ: hội chứng FOMO) qua các nghiên cứu uy tín (Viện Tâm lý học VN) để lấy số liệu thực tế chứng minh." },
        { step: "02", title: "Bản địa hóa", desc: "Loại bỏ các ví dụ phương Tây chung chung của AI, điều chỉnh trọng tâm vào bối cảnh Việt Nam (như nền tảng TikTok, Threads, Facebook)." },
        { step: "03", title: "Cá nhân hóa (Giọng văn của mình)", desc: "Chỉ sử dụng khung dàn ý AI gợi ý. Toàn bộ nội dung chi tiết được viết lại bằng trải nghiệm và kiến thức cá nhân, giữ vững bản sắc riêng." }
      ]
    },
    {
      title: "Ranh giới đạo đức trong học thuật",
      highlights: [
        { emoji: "✅", text: "Hỗ trợ hợp lý: Dùng AI làm 'trợ lý' để gợi ý ý tưởng, sửa lỗi chính tả hoặc giải thích khái niệm khó." },
        { emoji: "❌", text: "Gian lận học thuật: Dùng AI như 'người viết thuê', copy-paste nguyên văn kết quả để nộp mà không qua tư duy." },
        { emoji: "⚠️", text: "Sở hữu trí tuệ: Không trích dẫn AI như một tác giả hợp pháp (vd: ChatGPT, 2026), bắt buộc phải tìm và trích dẫn tài liệu gốc." }
      ]
    },
    {
      title: "Bộ 6 nguyên tắc sử dụng AI cá nhân",
      highlights: [
        { emoji: "🧠", text: "1. Tư duy đi trước: Luôn tự suy nghĩ và tìm hiểu vấn đề trước khi gõ prompt." },
        { emoji: "🔍", text: "2. Bảo chứng thông tin: Luôn kiểm chứng lại số liệu AI cung cấp bằng các nguồn chính thống." },
        { emoji: "✍️", text: "3. Giọng văn của mình: Giữ vững bản sắc cá nhân; không copy-paste, con người mới là người viết." },
        { emoji: "📣", text: "4. Minh bạch tuyệt đối: Luôn có 'Tuyên bố sử dụng AI' (AI Disclosure) ở cuối bài luận." },
        { emoji: "🔒", text: "5. Bảo mật dữ liệu: Tuyệt đối không tải tài liệu mật hoặc thông tin cá nhân lên AI công cộng." },
        { emoji: "🚀", text: "6. Làm chủ công nghệ: Xem AI là công cụ tăng tốc hiệu suất, quyết không rơi vào nguy cơ 'Lười tư duy'." }
      ]
    }
  ]
}
];