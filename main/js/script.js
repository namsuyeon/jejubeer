let addMenu = function() {

    document.write("<ul>");
    function Menu(name, url) {
        this.name = name;
        this.url=url;
        document.write('<li>'+'<a href="'+url+'">'+name+'</a>'+'</li>');
    }
    document.write("</ul>");

    let arr=[
        new Menu('EVENT','index1.html'),
        new Menu('SHOP','shop.html'),
        new Menu('ABOUT US','about_us.html'),
        new Menu('NEWS','news.html'),
        new Menu('CONTACT','contact.html')
    ];
    for(let el of arr)
    {

    }
};

let addFooter = function() {
    function Footer(company,name,address,hosting,hostnumber,number,responsible,servicecenter,email) {
        this.company = company;
        this.name = name;
        this.address=address;
        this.hosting = hosting;
        this.hostnumber=hostnumber;
        this.number=number;
        this.responsible=responsible;
        this.servicecenter=servicecenter;
        this.email=email;
        document.write(''+company+'&nbsp;대표이사&nbsp;'+name+'<br>');
        document.write('본사) '+address+'<br>');
        document.write('호스팅 제공자 '+hosting+'&nbsp;&nbsp;&nbsp;사업자등록번호&nbsp;'+hostnumber+'&nbsp;&nbsp;&nbsp;통신판매업신고번호&nbsp;'+number+'<br>');
        document.write('개인정보보호책임자&nbsp;'+responsible+'&nbsp;&nbsp;&nbsp;고객센터&nbsp;'+servicecenter+',&nbsp;'+email+'');
    }

    new Footer('제주맥주 주식회사','문혁기','제주특별자치도 제주시 한림읍 금능농공길 62-11','(주)아임웹','616-86-27415','제 2020-제주한림-0101 호','이용석','02-2235-5559','jejubeer@jejubeer.co.kr');


}
