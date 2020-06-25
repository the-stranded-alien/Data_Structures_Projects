export {ChatHandler, chat_names}

const chat_names = ["Sahil Gupta", "Anant Singhal", "Shivam Aggarwal", "Arnav Jain",
                   "Aakriti Jain", "Shubhangi Mishra", "Rohan Mukhija"];
const chat_names_length = chat_names.length;
const chat_msg = ["Why didn't he come and talk to me himse...",
                 "Perfect, I am really glad to hear that!...",
                 "This is what I understand you're telling me...",
                 "I'm sorry, I don't have the info on that..."];
const chat_msg_length = chat_msg.length;
const chat_img_length = 7;


class ChatHandler{
    constructor(chat_template, chat_list){
        this.hashmap = new Map();
        this.linked_list = null;
        this.chat_template = chat_template;
        this.chat_list = chat_list;
        let clock = new Date();
        this.hours = clock.getHours();
        this.mins = clock.getMinutes();
    }
    
    getTime(){
        // Generates Time Stamp For Messages
        this.mins += 1;
        if(this.mins===60){
            this.hours += 1;
            this.mins = 0;
        }
        if(this.hours===24){
            this.hours = 0;
        }
        return ("0" + this.hours).slice(-2) + ":" + ("0" + this.mins).slice(-2);
    }
    
    createNode(id){
        // Node Element
        let node = {};
        // Pointers To Next And Previous Node
        node['next'] = null;
        node['prev'] = null;
        // Copy Of Chat Template
        let chat_item = this.chat_template.cloneNode(true);
        // Adding Name, Message, Image To Template Item
        chat_item.querySelector('#Name').innerText = chat_names[id%chat_names_length];
        chat_item.querySelector('#Message').innerText = chat_msg[id%chat_msg_length];
        console.log("./Assets/avatar" + eval(1+(id%chat_img_length)) + ".png");
        chat_item.querySelector('#Image').src = "./Assets/avatar" + eval(1+(id%chat_img_length)) + ".png";
        node['chat_item'] = chat_item;
        return node;

    }
    
    newMsg(id){
        let node = null;
        if((id in this.hashmap) === false){
            // Node Is Not In The Linked List
            node = this.createNode(id);
            this.hashmap[id] = node;
        } else {
            // Node Is In The Linked List
            node = this.getNodeFromList(id);
        }
        
        if(this.linked_list === null){
            // Set The Node As Head Of Empty List
            this.linked_list = node;
        } else {
            // Add Node To The Head Of Linked List
            node['next'] = this.linked_list;
            if(this.linked_list !== null) this.linked_list['prev'] = node;
            this.linked_list = node;
        }
        this.updateList();
    }
    
    deleteMsg(id){
        let node = this.getNodeFromList(id);
        // Deleting Node Since It Is Deleted From Linked List
        delete this.hashmap[id];
        // Clear Entry From Hashmap
        this.updateList();
    }
    
    getNodeFromList(id){
        let node = this.hashmap[id];
        let prevNode = node['prev'];
        let nextNode = node['next'];
        
        // Updating Previous And Next Node Pointers
        if(prevNode !== null) prevNode['next'] = nextNode;
        if(nextNode !== null) nextNode['prev'] = prevNode;
        
        // Updating Head Of The Linked List
        if(node === this.linked_list) this.linked_list = nextNode;
        
        node['next'] = null;
        node['prev'] = null;
        return node;
    }
    
    updateList(){
        // Updating The Contents Of The Chat List
        let innerHTML = '';
        let head = this.linked_list;
        while(head !== null){
            let element = head['chat_item'];
            if(head === this.linked_list) {
                element.className = "ks-item ks-active";
                element.querySelector('#Time').innerText = this.getTime();
            } else {
                element.className = "ks-item";
            }
            innerHTML += element.outerHTML;
            head = head['next'];
        }
        this.chat_list.innerHTML = innerHTML;
    }
}
