// 课程数据（按学期倒序）
    const coursesData = [
        {
            name: "Advanced Algebra II",
            semester: "25 Spring",
            type: "Undergraduate course",
            school: "Peking University (PKU)",
            year: 2025,
            instructor: "Dr. Xia Gao",
            instructorUrl: null,
            description: "I served as a Teaching Assistant for Advanced Algebra II taught by Dr. Xia Gao in the 2025 Spring semester. I grade exercises and exam papers and I also teach a series of lessons on advanced algebra problem solving.",
            ratio: "Homework : Midterm : Final = TBA",
            lessonInfo: {
                location: "Room 414, Second Teaching Building (二教414)",
                time: "18:40-20:30, Thursday on the even weeks (双周周四晚18:40-20:30)",            
                material: { text: "Lecture notes (自编讲义)", url: "/files/Lecture_Notes(2025).pdf" }  // 可替换真实链接
            },
            submission: "Please hand in your homework in paper form before the class begins / 请在课前提交纸质版作业\n\n No late submission. Submission after the final is strictly PROHIBITED / 请勿迟交作业，严禁期末考试后补交"
        },
        {
            name: "Advanced Algebra II",
            semester: "24 Spring",
            type: "Undergraduate course",
            school: "Peking University (PKU)",
            year: 2024,
            instructor: "Prof. Fuzheng Wang",
            instructorUrl: null,
            description: "I served as a Teaching Assistant for Advanced Algebra II taught by Prof. Fuzheng Wang in the 2024 Spring semester. I graded exercises and exam papers and I also taught a series of lessons on advanced algebra problem solving.",
            ratio: "Homework : Midterm : Final = 1 : 4 : 5",
            lessonInfo: {
                location: "204, the scientific teaching building (理教204)",
                time: "18:40-20:30, Thursday on the even weeks",
                material: { text: "Lecture notes (自编讲义)", url: "/files/Lecture_Notes(2024).pdf" }
            },
            submission: "Please hand in your homework in paper form before the class begins / 请在课前提交纸质版作业\n\n No late submission. Submission after the final is strictly PROHIBITED / 请勿迟交作业，严禁期末考试后补交"
        },
        {
            name: "Advanced Algebra II",
            semester: "23 Spring",
            type: "Undergraduate course",
            school: "Peking University (PKU)",
            year: 2023,
            instructor: "Prof. Wenwei Li",
            instructorUrl: "https://www.wwli.asia/index.php/en/",
            description: "I served as a Teaching Assistant for Advanced Algebra II taught by Prof. Wenwei Li in the 2023 Spring semester. I graded exercises and exam papers and I also taught a series of lessons on advanced algebra problem solving.",
            ratio: "Homework : Midterm : Final = 2 : 3 : 5",
            lessonInfo: {
                location: "406, the third teaching building (三教406)",
                time: "18:40-20:30, Thursday on the even weeks",
                material: { text: "Lecture notes (自编讲义)", url: "https://github.com/xiaxueqaq/Advanced_Algebra_II_notes" }
            },
            submission: "Please hand in your homework in paper form before the class begins. No late submission."
        },
        {
            name: "Advanced Algebra II",
            semester: "22 Spring",
            type: "Undergraduate course",
            school: "Peking University (PKU)",
            year: 2022,
            instructor: "Prof. Yufeng Zhao",
            instructorUrl: null,
            description: "I served as a Teaching Assistant for Advanced Algebra II taught by Prof. Yufeng Zhao in the 2022 Spring semester. I graded exercises and exam papers and I also taught a series of lessons on advanced algebra problem solving.",
            ratio: "Homework : Midterm : Final = 1 : 4 : 5",
            lessonInfo: {
                location: "302, the fourth teaching building (四教302)",
                time: "18:40-20:30, Thursday on the even weeks",
                material: { text: "Lecture notes (自编讲义)", url: "https://github.com/xiaxueqaq/Advanced_Algebra_II_notes" }
            },
            submission: "Please hand in your homework in paper form before the class begins / 请在课前提交纸质版作业\n\n No late submission. Submission after the final is strictly PROHIBITED / 请勿迟交作业，严禁期末考试后补交"
        },
        {
            name: "Linear Algebra C",
            semester: "21 Fall",
            type: "Undergraduate course",
            school: "Peking University (PKU)",
            year: 2021,
            instructor: "Prof. Chunwei Song",
            instructorUrl: "https://www.math.pku.edu.cn/teachers/csong/index.html",
            description: "I served as a Teaching Assistant for Linear Algebra C taught by Prof. Chunwei Song in the 2021 Fall semester. I graded exercises and exam papers.",
            ratio: "Homework : Midterm : Final = 1 : 4 : 5",
            lessonInfo: null,   // 无习题课信息，不显示该区块
            submission: "Please hand in your homework in paper form before the class begins. No late submission."
        }
    ];

    // 辅助函数：渲染 material（支持纯文本或带链接的对象）
    function renderMaterial(material) {
        if (!material) return '';
        if (typeof material === 'string') return material;
        if (material.url) {
            return `<a href="${material.url}" target="_blank" rel="noopener noreferrer">${material.text}</a>`;
        }
        return material.text || '';
    }

    function renderCourses() {
        const container = document.getElementById('courseList');
        if (!container) return;
        container.innerHTML = '';

        coursesData.forEach((course, idx) => {
            const instructorHtml = course.instructorUrl 
                ? `<a href="${course.instructorUrl}" target="_blank" rel="noopener noreferrer">${course.instructor}</a>`
                : course.instructor;
            
            // 构建详细内容
            let detailsHtml = `
                <div class="detail-section">
                    <strong>📝 Course description</strong><br>
                    ${course.description}
                </div>
                <hr>
                <div class="detail-section">
                    <strong>📊 Ratio / 分数比例:</strong><br>
                    ${course.ratio}
                </div>
            `;

            // 习题课信息（可选）
            if (course.lessonInfo) {
                const materialHtml = renderMaterial(course.lessonInfo.material);
                detailsHtml += `
                    <div class="detail-section">
                        <strong>📚 Information about the lessons on problem solving (习题课信息)</strong><br>
                        <ul class="detail-list">
                            <li><strong>Location:</strong> ${course.lessonInfo.location}</li>
                            <li><strong>Time:</strong> ${course.lessonInfo.time}</li>
                            <li><strong>Material:</strong> ${materialHtml}</li>
                        </ul>
                    </div>
                `;
            }

            detailsHtml += `
                <div class="detail-section">
                    <strong>📝 Submission policy:</strong><br>
                    ${course.submission}
                </div>
            `;

            const card = document.createElement('article');
            card.className = 'course-item';
            card.innerHTML = `
                <div class="course-title-row" role="button" tabindex="0" aria-expanded="false">
                    <div class="course-main-info">
                        <div class="course-name">${course.name} (${course.semester})</div>
                        <div class="course-meta">
                            ${course.type} · ${course.school} · ${course.year}<br>
                            Instructor: ${instructorHtml}
                        </div>
                    </div>
                    <span class="expand-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 5 16 12 9 19"></polyline>
                        </svg>
                    </span>
                </div>
                <div class="course-detail-wrapper">
                    <div class="course-detail-inner">
                        ${detailsHtml}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        // 事件委托处理点击和键盘
        container.addEventListener('click', (e) => {
            const titleRow = e.target.closest('.course-title-row');
            if (!titleRow) return;
            const card = titleRow.closest('.course-item');
            if (card) toggleCourse(card);
        });
        container.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const titleRow = e.target.closest('.course-title-row');
                if (titleRow) {
                    e.preventDefault();
                    const card = titleRow.closest('.course-item');
                    if (card) toggleCourse(card);
                }
            }
        });
    }

    function toggleCourse(card) {
        const wrapper = card.querySelector('.course-detail-wrapper');
        if (!wrapper) return;
        const isOpen = wrapper.classList.contains('open');
        if (isOpen) {
            wrapper.classList.remove('open');
            card.classList.remove('expanded');
            card.querySelector('.course-title-row')?.setAttribute('aria-expanded', 'false');
        } else {
            wrapper.classList.add('open');
            card.classList.add('expanded');
            card.querySelector('.course-title-row')?.setAttribute('aria-expanded', 'true');
            // 动态高度过渡
            wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
            const onTransitionEnd = () => {
                wrapper.style.maxHeight = '';
                wrapper.removeEventListener('transitionend', onTransitionEnd);
            };
            wrapper.addEventListener('transitionend', onTransitionEnd, { once: true });
            setTimeout(() => {
                if (wrapper.style.maxHeight) wrapper.style.maxHeight = '';
            }, 1000);
        }
    }

    function updateStats() {
        document.getElementById('totalCount').innerText = coursesData.length;
    }

    document.addEventListener('DOMContentLoaded', () => {
        renderCourses();
        updateStats();
        console.log('✅ Teaching page loaded');
    });

    // 可选控制台命令
    window.expandAllCourses = () => {
        document.querySelectorAll('.course-item').forEach(card => {
            const wrapper = card.querySelector('.course-detail-wrapper');
            if (wrapper && !wrapper.classList.contains('open')) toggleCourse(card);
        });
    };
    window.collapseAllCourses = () => {
        document.querySelectorAll('.course-item').forEach(card => {
            const wrapper = card.querySelector('.course-detail-wrapper');
            if (wrapper && wrapper.classList.contains('open')) toggleCourse(card);
        });
    };