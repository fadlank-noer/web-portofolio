<template>
    <div id="anchor-experience" class="w-screen h-screen mx-auto px-10 py-10 flex flex-col lg:flex-row text-2xl">
        <!-- Kata Pengantar -->
        <div class="w-full">
            <i class="text-3xl">Experience</i>
            <p class="text-6xl my-4 font-bold">My Journey</p>

            <!-- Bagian Years Experience dan Project Worked -->
            <div class="w-full h-full flex flex-row">
                <div class="years-container px-2">
                    <div class="flex items-center my-4">
                        <p class="text-7xl mr-3 font-bold bg-gradient-to-r from-(--primary-color) via-(--secondary-color) to-(--gradient-first) text-transparent bg-clip-text">3+</p> 
                        <p class="font-bold text-3xl">Years <br /> Experience...</p>
                    </div>
                    
                    <p>
                        Hello There! My name is <span class="font-bold bg-gradient-to-r from-(--primary-color) via-(--secondary-color) to-(--gradient-first) text-transparent bg-clip-text">Fadlan Kautsar Noer</span>

                        <br>

                        I am a Software Engineer and I'm very passionate and dedicated to my work
                    </p>
                </div>

                <div class="projects-container px-2">
                    <div class="flex items-center my-4">
                        <p class="text-7xl mr-3 font-bold bg-gradient-to-r from-(--primary-color) via-(--secondary-color) to-(--gradient-first) text-transparent bg-clip-text">10+</p> 
                        <p class="font-bold text-3xl">Projects <br /> Taken...</p>
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
                <div class="work-div basis-10/12 my-7">
                    <div class="flex justify-between">
                        <p>{{ e_item.date }}</p>
                        <i>{{ e_item.company }}</i>
                    </div>

                    <p style="font-size: 2.5rem;" class="font-bold my-3">{{ e_item.title }}</p>
                    <ul>
                        <li
                            v-for="(d_item, d_index) in e_item.duties"
                            :key="d_index"
                        >- {{d_item}}</li>
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
