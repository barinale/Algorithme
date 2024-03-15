class Node { 

    // Constructor to create a new node 
    constructor(d) { 
        this.data = d; 
        this.next = null; 
    } 
} 
let headT =new  Node(10);
headT.next = new Node(20);
headT.next.next = new Node(30);
headT.next.next.next = new Node(40);
headT.next.next.next.next = new Node(50);
headT.next.next.next.next.next = new Node(60);
headT.next.next.next.next.next.next = new Node(70);


/**reverse   A LinkedList */
let NextNode = {}
let count =0;
console.log("start")
 //using simpel way pointer to current and prev on next

 const ReverseALinkedList = (Head)=>{
    let current = Head;
    if(!current)
        return current;
    let next = current.next;
    let prev = null;
    while(current){
        next = current.next;
        current.next=prev;
        prev = current;
        current=next;

    }
    return prev; 
 }
console.log(ReverseALinkedList(headT))
//using recursion Algo
//
function revesreLinkedList(Head){
    if(Head.next==null || Head==null){
        return Head;
    }
    NextNode = revesreLinkedList(Head.next)
        Head.next.next = Head;
        Head.next = null;
    return NextNode;
}
// }
// console.log("end")
// let a = revesreLinkedList(headT)
// console.log(a)

// if(Head.next==null)
// return Head;

// NextNode=revesreLinkedList(Head.next)
// NextNode.next=Head;

// console.log(Head)
// return NextNode;
//NextNode  rv()    rv()    40    40  
//Head      10      20      30      40

//result                    40.n=30            

/**FOund Cycl Linked List */




// let ArrayD={};
// ArrayD[headT]="4"
// ArrayD[headT.next]="14"
// headT = headT.next;
// ArrayD[headT]="114"

// console.log(ArrayD)
// console.log(ArrayD[headT])

/* Merge two Sorted LinkedList */


//  var head = new Node(10)
//  head.next = new Node(20)
//  head.next.next = new Node(30)
//  head.next.next.next = new Node(40)
// var head2 = new Node(10)
// head2.next = new Node(15)
// head2.next.next = new Node(24)
// head2.next.next.next = new Node(66)
// function merge(head,head2){
//     if(head && head2){
//         if(head.data < head2.data)
//             {
//                 head.next = merge(head.next,head2)
//                 return head;
//             }else{
//                 head2.next = merge(head,head2.next);
//                 return head2;
//             }
//     }else{
//         if(!head)
//             return head2;
//         return head;
//     }
// }



    // class Solution {
    //     public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

    //         if(list1!=null && list2!=null){
    //         if(list1.val<list2.val){
    //             list1.next=mergeTwoLists(list1.next,list2);
    //             return list1;
    //             }
    //             else{
    //                 list2.next=mergeTwoLists(list1,list2.next);
    //                 return list2;
    //         }
    //         }
    //         if(list1==null)
    //             return list2;  
    //         return list1;
    //     }
    // }




    //********************************* */
// class Node{
//     constructor(value,Node=null){
//         this.value=value;
//         this.Next = Node;
//     }
// }
// class LinkList{
//     constructor(){
//         this.head = null;
//     }
//     insertAtStart(Node){
//         Node.Next = head;
//         this.head = Node;
//     }
//     addNewNode(Node){
//         let node = this.head;
//         while(node.next){
//             node = node.next;
//         }
//         node.next = Node;
//     }
//     AfficheLinkList(){
//          let node = this.head   
//         while(node.value){
//             console.log(node.value)
//             if(node.next)
//                 node = node.next
//             else
//                 node=""
//         }
//     }
// }

// let dataLink = new LinkList();
// dataLink.head = new Node(10);
// dataLink.addNewNode(new Node(200));
// dataLink.AfficheLinkList()

//******************************************* */
// let NewNode3 = new Node(40)
// let NewNode2 = new Node(30,NewNode3)
// let NewNode1 = new Node(20,NewNode2)
// let NewNode = new Node(15,NewNode1)
// head = new Node(10,NewNode)

// let NewNead = new Node(5)
// function AfficheLinkedLlist(Node){
//     while(Node.value){
//         console.log(Node.value)
//         if(Node.Next)
//             Node = Node.Next;
//         else
//             Node= ''            
//     }
// }
// console.log(head)

// function InserNodeInHead(head,Node){
//     Node.Next = head;
//     head = Node;
// }
// console.log(head)

// InserNodeInHead(head,NewNead)
// AfficheLinkedLlist(head)
// AfficheLinkedLlist(NewNead)

