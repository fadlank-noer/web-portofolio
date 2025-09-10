<template>
    <div id="anchor-experience" class="w-screen min-h-screen mx-auto px-4 md:px-10 py-8 md:py-10 flex flex-col lg:flex-row gap-8 lg:gap-12 text-xl md:text-2xl bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden overflow-y-hidden">
        <!-- Kata Pengantar -->
        <div class="w-full">
            <i class="text-2xl md:text-3xl">Experience</i>
            <p class="text-4xl md:text-6xl my-3 md:my-4 font-bold">My Journey</p>

            <!-- Bagian Years Experience dan Project Worked -->
            <div class="w-full h-full flex flex-col md:flex-row gap-6 md:gap-8">
                <div class="years-container px-2">
                    <div class="flex items-center my-4">
                        <p class="text-5xl md:text-7xl mr-3 font-bold bg-gradient-to-r from-(--primary-color) via-(--secondary-color) to-(--gradient-first) text-transparent bg-clip-text">3+</p> 
                        <p class="font-bold text-2xl md:text-3xl">Years <br /> Experience...</p>
                    </div>
                    
                    <p>
                        Hello There! My name is <span class="font-bold bg-gradient-to-r from-(--primary-color) via-(--secondary-color) to-(--gradient-first) text-transparent bg-clip-text">Fadlan Kautsar Noer</span>

                        <br>

                        I am a Software Engineer and I'm very passionate and dedicated to my work
                    </p>
                </div>

                <div class="projects-container px-2">
                    <div class="flex items-center my-4">
                        <p class="text-5xl md:text-7xl mr-3 font-bold bg-gradient-to-r from-(--primary-color) via-(--secondary-color) to-(--gradient-first) text-transparent bg-clip-text">10+</p> 
                        <p class="font-bold text-2xl md:text-3xl">Projects <br /> Taken...</p>
                    </div>
                    
                    <p>
                        With 3+ years of experience as a professional Software Engineer,

                        <br>

                        I have acquired the skills and knowledge necessary to make your project a success.
                    </p>
                </div>
            </div>
        </div>
        
        <!-- Bagian Kerja -->
        <div class="work-experience w-full mt-2">
            <div 
                v-for="(e_item, e_index) in experiences"
                :key="e_index"
                class="w-full flex"
            >

                <!-- Bullet and Lines -->
                <div class="basis-1/12 relative">
                    <div class="x-bullet w-7 h-7 bg-(--primary-color) rounded-full absolute top-8">
                    </div>
                    <div
                        :class="[
                            'x-lines',
                            'w-3',
                            'h-full',
                            'bg-gradient-to-b',
                            'absolute',
                            'left-2',
                            'top-9',
                            'from-[var(--primary-color)]',
                            'via-[var(--secondary-color)]',
                            'to-[var(--gradient-first)]',
                            e_index === experiences.length - 1 ? 'hidden' : ''
                        ]" 
                    >
                    </div>
                </div>

                <!-- Work Experience -->
                <div class="work-div basis-10/12 my-7 bg-white rounded-lg shadow-md p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{{ e_item.date }}</span>
                        <i class="text-lg font-semibold text-(--primary-color)">{{ e_item.company }}</i>
                    </div>

                    <h3 class="text-2xl md:text-3xl font-bold my-3 text-gray-800">{{ e_item.title }}</h3>
                    <ul class="space-y-2">
                        <li
                            v-for="(d_item, d_index) in e_item.duties"
                            :key="d_index"
                            class="flex items-start"
                        >
                            <span class="text-(--primary-color) mr-2 mt-1">•</span>
                            <span class="text-gray-700">{{d_item}}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
const experiences = [
    {
        title: 'CO-Founder',
        company: 'Valtara Capital',
        date: 'Jun 2025 – Present',
        duties: [
            'Make a Technical Decision for the Company',
            'Maintaining Valtara Trade System',
            'Designing a system for the company'
        ],
    },
    {
        title: 'Associate Engineer',
        company: 'PT Meteor Inovasi Digital',
        date: 'Jun 2022 – Jul 2025',
        duties: [
            'Developing an E-wallet app with team as Backend',
            'Developing a Customer Loyalty App with team as Fullstack',
            'Developing a After Sales Service App with team as Backend'
        ],
    },
    {
        title: 'Trainee',
        company: 'PT Dumbways Indonesia Teknologi',
        date: 'Feb 2022 - May 2022',
        duties: [
            'Learning Fullstack Developer Course',
        ],
    },
    {
        title: 'Travel Consultant',
        company: 'PT Dwidaya Worldwide',
        date: 'Apr 2018 - Nov 2021',
        duties: [
            'Ticketing with Travelport galileo, Amadeus and Sabre.',
            'Fulfilling customer needs and exceed the customer expectations from our services.',
            'Tour leader and guiding at guided tours.',
        ],
    },
    {
        title: 'Student',
        company: '57 Vocational Highschool',
        date: 'Jun 2015 - Mar 2018',
        duties: [
            'Learning as Student',
        ],
    }
];
</script>

<style scoped>
/* Optional: Add timeline gradient or animation if needed */
</style>
