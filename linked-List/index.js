var head;
class Node{
    constructor(value,Node=null){
        this.value=value;
        this.Next = Node;
    }
}
class LinkList{
    constructor(){
        this.head = null;
    }
    insertAtStart(Node){
        Node.Next = head;
        this.head = Node;
    }
    AfficheLinkList(){
         let node = this.head
        while(node.value){
            console.log(this.head.value)
            if(node.next)
                node = node.next
            else
                node=""
        }
    }
}


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

