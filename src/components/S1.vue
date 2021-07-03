<template>
    <div class="class-table">
        <div class="table-wrapper">
            <div class="tabel-container">

                <table>
                    <thead>
                        <tr>
                            <th>时间</th>
                            <th v-for="(weekNum, weekIndex) in classTableData.courses.length" :key="weekIndex"> {{'周' + digital2Chinese(weekIndex, 'week')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(lesson, lessonIndex) in classTableData.lessons" :key="lessonIndex">
                            <td>
                                <p>{{'第' + digital2Chinese(lessonIndex+1) + "节"}}</p>
                                <p class="period">{{ lesson }}</p>
                            </td>

                            <td v-for="(course, courseIndex) in classTableData.courses" :key="courseIndex">
                                {{classTableData.courses[courseIndex][lessonIndex] || '-'}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name:'S1',
    data() {
        return {
            classTableData: {
                lessons: [
                    '08:00-09:00',
                    '09:00-10:00',
                    '10:00-11:00',
                    '11:00-12:00',
                    '13:00-14:00',
                    '14:00-15:00',
                    '15:00-16:00',
                    '16:00-17:00'
                ],
                courses: [
                    ['', '', '', '', '', '', '', ''],
                    ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
                    ['语文', '数学', '英语', '历史', '', '化学', '物理', '生物'],
                    ['生物', '', '化学', '政治', '历史', '英语', '数学', '语文'],
                    ['语文', '数学', '英语', '历史', '政治', '', '物理', '生物'],
                    ['生物', '物理', '化学', '', '历史', '英语', '数学', '语文'],
                    ['语文', '数学', '英语', '', '', '', '', ''],
                ]
            }

        };
    },
    created() {
    	// /* mock随机数据*/
        // Mock.mock({
		//     lessons: ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
		//     'courses|7': [['生物', '物理', '化学', '政治', '历史', '英语', '', '语文']]
		// });
    },
    methods: {
        /**
        * 数字转中文
        * @param {Number} num 需要转换的数字
        * @param {String} identifier 标识符
        * @returns {String} 转换后的中文
        */
        digital2Chinese(num, identifier) {
            const character = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
            return identifier === 'week' && (num === 0 || num === 7) ? '日' : character[num];
        }
    }
};
</script>

<style lang="scss" scoped>
.class-table {
    .table-wrapper {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .tabel-container {
        margin: 7px;

        table {
            table-layout: fixed;
            width: 100%;

            thead {
                background-color: #67a1ff;
                th {
                    color: #fff;
                    line-height: 17px;
                    font-weight: normal;
                }
            }
            tbody {
                background-color: #eaf2ff;
                td {
                    color: #677998;
                    line-height: 12px;
                }
            }
            th,
            td {
                width: 60px;
                padding: 12px 2px;
                font-size: 12px;
                text-align: center;
            }

            tr td:first-child {
                color: #333;
                .period {
                    font-size: 8px;
                }
            }
        }
    }
}
</style>
