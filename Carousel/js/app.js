class carousel {
    id = "#carousel";
    img_arr = ["img_1", "img_2", "img_3", "img_4"];
    current_index = 0;

    constructor(id = "#carousel") {
        this.id = id;

        this.add_pagination();
        this.add_buttons();
        this.add_image();

        this.change_img_src();
    }

    // add current image in carousel
    add_image() {
        let img = document.createElement("img");
        $(this.id).append(img);
    }
    // add left and right buttons to carousel
    add_buttons() {
        let right = $(document.createElement("button")).addClass("fas fa-caret-right");
        let left = $(document.createElement("button")).addClass("fas fa-caret-left");

        $(this.id).append(right);
        $(this.id).append(left);

        $(`${this.id} .fa-caret-left`).on("click", () => this.left());
        $(`${this.id} .fa-caret-right`).on("click", () => this.right());
    }
    // add pagination tag in page
    add_pagination() {
        let pagination = $(document.createElement("span")).addClass("pagination");
        $(this.id).append(pagination);
    }
    

    // gets img relative path
    get_img_path = (img_name = this.current_index) => `./assets/img/${this.img_arr[img_name]}.jpg`; 
    // change carousel's pagination current index
    change_pagination($pagination = $(`${this.id} .pagination`)) {
        let pagination_text = `${this.current_index + 1} / ${this.img_arr.length}`;
        $($pagination).text(pagination_text);
    }
    // change carousel current img
    change_img_src($img = $(`${this.id} img`)) { 
        $($img).attr("src", this.get_img_path());
        this.change_pagination();
    }

    // move left
    left() {
        if(this.current_index > 0) {
            this.current_index--;
            let $img = $(`${this.id} img`);
            this.change_img_src($img);
        }
    }
    // move right
    right() {
        if(this.current_index < this.img_arr.length - 1) {
            this.current_index++;
            let $img = $(`${this.id} img`);
            this.change_img_src($img);
        }
    }
}

let car = new carousel();

