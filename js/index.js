Vue.component('course-box',{
    props: ['image','title','price'],
    data(){
        return{}
    },
    template: 
    `<div class="col-4 px-4 ">
        <div class="courseBox py-3 px-3">
            <img :src="image" alt="html" width="100%" height='194px'>
            <div class="courseTxt pt-2">
                <h4 class="m-0">{{title}}</h4>
                <p class="m-0 pt-1">{{price}}</p>
            </div>
        </div>
    </div>`,
})
new Vue({
    el:'.row',
    data:{},
})