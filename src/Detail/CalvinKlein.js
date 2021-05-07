import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
 

class Slider extends React.Component {
  render() {
    return (<div >
    <ImageGallery {... (
        {
          thumbnailPosition: "left",
          useBrowserFullscreen: true,
          showPlayButton: true,
          showIndex: true,
          height: "400px",
          width: "400px",

    
          items: [
            
              {
                original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-2Fz3o8GFltFTiehYmPvp8FusWWTnMJPQQ&usqp=CAU',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-2Fz3o8GFltFTiehYmPvp8FusWWTnMJPQQ&usqp=CAU',
              },
              {
                original: 'https://i.insider.com/5d6578442e22af1ace568f05',
                thumbnail: 'https://i.insider.com/5d6578442e22af1ace568f05',
              },
              {
                original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZrdR8qGGHiEqLiDqoGhaqgjd7QaosNHccA&usqp=CAU',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZrdR8qGGHiEqLiDqoGhaqgjd7QaosNHccA&usqp=CAU',
              },  {
                original: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMSFhUXFxgXGRcYFxUZFxcXGBUXFhgXGhcaHSggGBslHhYYIzEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0mHyUrNS0tLS0tLSstKy8tNS0tLSstLS0uLS0tLS0tLS0tLy8tLS4tLS0tKy0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHCAH/xABCEAABAwEEBwQHBwMBCQAAAAABAAIDEQQSITEFBkFRYXHwIoGRsQcyUqHB0eETFEJicoKSM0PxIxYXJDREVIOT0v/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACQRAQADAAICAgEFAQAAAAAAAAABAhESIQMxIjJBM1FhcbET/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAix+n9JizWaa0EXhFG592tLxAwbXZU0C5zq/6T57RaoInRxNZI9rSAHXhewHaJ2EjZsQdWRUSytaKuIaBtJAHiVrOlde7LFUMJlP5cG/yPwBWorM+mbXrX3LaUWgWb0ltLqPgIbva+p8CBXxW72C2xzRtlicHMcKgjrA8DklqTX2lPJW/1lIRFE0rpGOzxOlldda3xJ2ADeVluZxLRcvtHpHncXOYyFkewOq5550cADwptViLXy2vqWmINGZc0U8B81rhLnPlrHt1dFy+P0i2kD1IZf0slb77xBUiz+lRtW/aWYhpwc5slacmlor4pxlf+lc10hFF0bpCKdgkicHNPuO4jMFSllqJ3uBERFEREBERAREQEREBERAREQat6T2k6LtVM7jfASNJ91VwvQLix7ZGuLXtNWEUqCNuK9K6RsbJopInirZGuY7k4UPfivNb4/s3FgNQ0ltRhWhpeG6uasDK6Vt8zu1LK+Q73OJyNDgcu5Q5LTVVy4xd9Pj8VhDLQubuC9cT1D5lq7aWYZLRbDqdrY+wyEGr4HkX2bWnAX28abNtO9aXFacByV+Kfv4JOTGSV2s7Dvtp12sTY2vEt+8KhrAS7kR+A8HUXPtcNYX25zQA5kTMmmhJcfxOpwqKbMd6051qc3DM+yMGjmaVJ4DxXxri71jXhkByC4ZFXu5Tb0yH3LAYnngd3dtUeWyPGRB54e8bO5IpSPVNPePBTLPNe4HMivLEbxxTIn0RaY+yG63vFGvvBo7hTL1mjAc6KzarRGcRdaCMr16qyr2inW76qG6MAmgG3ZTaBn4qbKx46xOxDL6iaxvscoD7xheaHfTYabxs34hdvs8zXtD2EOa4VBGRC88ueBnSm7voAvv+1tpgiMUc72Rk1zFRXc7MdyTlv7StZrPXr/HolFr+ocMzbDCJ3h76EghweLhJLBfBId2SMVsC5uoiIgIiICIiAiIgIiICIiDEa26RFnsc8p2MIH6n9hvvcF51ZUuoMTv2DhzXa/S9KRYKD8UsbfM/BcXjNMlqETmMLWmprXhShWv6UbdJd7Qp3/4WfjtAIoeusVTJGxwoaEbiARvyINF1i3WS4X8Xy5Q1ux3n4NFaZnYOZ2LLwxXBniRnlnu4cczwUh8jGijQDTLcO7IK003jUn5ngFOX7EeOI7lVEwNBOzdvO0hXKU6xHML5XbhUYflZ8yrEkm7vcdv0WZhuttXrJDcvUc514k9o1pXYNwUmvcRkdysREkXi0gb9h402eSrlbeaRUiopUeYU9NdSmx2sUxwPDI8t2WSiy28dc6qMyyvyLwBwGPifkk2j2OFDXnU/4orM6VjOli0aRH+FGlikcP6ZIO/DzoVMc77Ol1tTk0fEccFDfLaHYloA4u39yjTPam662ywB8LQHR4EMkBIYa1NwgigdjUZbc6171q5pdtrs0doa0tDweydhBLXCu0VBxXm0scaDFzlmdTtarVo6QtDXPifVxieeze9prhWh3hSYHotFpvo/1zfbzK18IYY7pvNvFhvV7NT+LCueW7buSyoiIgIiICIiAiIgIiINF9MLSbEzcJmk/wAHiviQuLtkHflRdv8ASXK0xxRGnbc7DaQGkfEriukLIY3kUqRlXC83Z3j5rcR0zy7xbfLuHj8l8N7jjspn81cidXFp/iKeLjiE+2umoIr3nxcc+5XGec/iF6Oy0F59AN2/rxVueZuF0UpWpxAPPao75HPNc+Jy7grkdnGZxPu7h15Jv7JFJnu0qbznZZbzg0ch1zUqy2YVqcee3luC+xR3v0+fDr/Ep7g0Y8gN/AblutfzLn5fJnxq+yTADHHcN/XXGKKk0FCd2Q+nW9KFx4nwHW/6KVEygp0for9p/hn9KP5WQ7Zkdx8xvCjzRPLqtcKbj5qRLKD+nfvPA7AvjGOpXMH+VN/HJYmO+natvjtluKzY1canh9VVO0nHcBhxXx7i5pDXUJBAO403cFH+6PObyP01qe8rLaXCWNGJBJzz8FEtUzTmVZn0SDk+StPaNCV9dYIxQltaZV2896Km6o60T6PnLoXGSJ5rJGTge7Y4bD0e5aA14sVqc2Nkl2VwqI3Agk0qQDSjiMcjsXny7UkMaBxyUvRQlgnjnY4FzDeAIwvDL9QxUwenEWpasa9QWkBkpEM2V0nsOP5XHyOPNbasqIiICIiAiIgIisW20XGF23ZxOxBzT0rh7gyZuUb6V3ZAHlUe9ag17LVHd9WRoqK40O+ud07a1z4LqT4myNcyQBzXCjgdoXP9Naizwu+0spMjcwAaSN4bnD38FuJxi1d7/LTbVA4Ej8Qzbs/UKZ7OdV8js4OJNfLwV/SJk+0Jla5r8KgtLTgKVoeStQPxpv8APryKLC81quRsrhs2/JUgVyV9pAHALda65+W+Rke1bnBox5AfAdfSxiTx3bAN31+SpJJNfAbvr1kFLgjA59Yclr7f05REeONn2+xRU4nf1sViaSuVbu383LhxVUstcB6vnw5KqGGtCctg37uv8FM71BFc+d1MEFcTls4/Tz5K/I+7xJ2b+e4dcrpdTiesVYLS4nz6y5J9eo9pETeeVvSmRof+reKeWVOasyEt9bL2th+W1TmRgYdE9bOjVhsoRv6yUmsRHbdfJNrZX0xk14jskA4ccP8ACjusz3es403D4nNTbZZGihbVuYwOHhlVR7sntNPNvyK5PQNZQADADcqq40xJ3fPcq4LO9xxfTg0UJHOp93BSo7OBgB4fFURmRE+s7DcKiv7q+QC3jQevc8DWsddkY0AAO9YAYAX/AJ1WnlnQVNOuuvJB2LR+v1kkoH34zxF4eLcfEBbBZNJwy/05Y38A4E+GYXn68Qq2TkbSpivRKLzz9+INQ54cMi1xa7uc0grOavekO02chspM8VcnuJkAJ2SHF37q8wpg7Uii6M0hHaImTROvMeKg+YI2EHAjgpSgLD6feasGztHvFB8VmFqnpEtEkUEUzBURzNLhsuua5uPAkgd4VgVhgK+3XDJQdEaTjnZfjdXe38TTuI+KyTXrTKPPDHKLsrGPG5zQfNYK36j2J+IY6I51Y403eqajbuWzPjBFVbYSEVoNq1BkbUwytk4O7Lqbq4g+5a1pTRk0JpLG9g3kdkn9QwPW5djfFtCpvVF0gEHAg5Fa5TmMcI5cnFYRt2qmeTYO/wCS6TpTU6CQkxkwu3UqyvLZ3FaTpXV60Wc/6jTc9tuLT37DzV5dZDHD5crMdDHXE5efXXG9LPTns+fLz8rbn0HuHyVhgJNdp29dZLX1jIc85zyt6X2Ek+fz+imMoKePW7rgo7KNHBWzNXPuHxPFPrHftO/JOR6Sb9eXn8gqm9dfVRmyddZKia0UGGfVeuC5zOvTWsVjIXbY7IfPb3bgVHBVFe8+ZQFRpcD6YjrZ4YqYy0tOeG/y27O9fNDaIktL/s4gCQC41NAAKZnvCzw1BtW10A5vd8GqaME+dm/zPDv62q2Zm8T171P0noIQtvPtELswBH9o+ppleu3Qe9YcuCovGYbveqQSrX2gXwzoLxaFGfEXmjUfOpFgmAa47Th4VQbf6ONZfuj/ALtJjFI8dqvqPPZrT2ThXdnvXYl5ws7C51V6Ksl64y9611tedBVZlV1WrVZ2yMcx7Q5rgWkHIg5hXUUHDdYtCS2Cdxie8NzYRUOoTkXDNTdFa/ObRs7L49ttA7vGR9y65brDHK27IxrhxAXOtP8AotL3X7PKBjW64U94zWtRltGayWWb1JWg+y/su9+B7istI1cd0vqpbrPW9Z5HgfiYLw91VBsWlbVE0C/NCfZq4DwVMdvjeqZI1xSXTtoce1aJSd193lVWXaYmH92T+Tvmg7hSoVPAioOw4jkuK2XXKWI1FokHMlw8DULd9XfSBFLRs90H22er+5ubeYRE3TupcM3ah/0n50/tnu/D3eC0m36Ims5uyMLeObTydkeS660ggUIIOIcMQeIO0L5IwOBa4NcDm1wBB8VqJyWL05RjiEslTw6x6+S+B3XXXcV0XS2ocLyXQvMTj+Ei9H3bW+PctQ0pqva4Kl0TnN9qPtt8BiO8BSZ1qtYrGQxJlp111grLd5zVDq1xwO7d3FfK9YqNLzXIXqyZEa7eiOi6o6KmhjMhfHH9oGuqQXODKVAxoG51xqoWnNZYm9mO9aHe3Kaxji2MUa48aDvWt6X1gmnwcbrBlG3BoAyr7XesVfQTLZbnyuvSOLjx2DcBkBwCjmRSbHoi0y4RwSurtDHU/lSi2Cx+jm3PxcIoh+Z9T4MB81NVqZkVBkW/S6h2Wz42u2cmRso48qlxPgsfPabLF/y0Nz87zfldyrUR/tx4hUYCy6Lc7tSVY3Pc49xyHNV3QThkMlJkkfI4NAJLjgxoLnOPIYkre9U/R691JLWCxuYir23frIwaOAx5KKhag6sunkbK9pELDWp/GRk0bxXM9y64qY4w0BrQAAKADAADYAqlJBERQEREBQ9IaKgnFJoYpB+drXeYwUxEGrT+jvRjq/8ACsaT+Jhe0+IKxsvon0cf+4H/AJnfFb2iDl9s9D1mGMRP76uPitX0n6NJYjVrThkW5rvCpc0HMK6OGaA0zabEbkjS+KuLTgQd43H3H3ro2jtIxTsvxuDm+DmncRsKzGk9XoJhRzRz2+K5vrFqvarC8z2YvMe0sxLP1N2t4rWpjesRxCMcNhIWjaB1/a4D7dtPzsHH8TfiFttn0tZ5KXZYnV/MAfBEX7bYYphSWKKQfmaK9xOSwr9R7Af7D2/pkf8A/RWwCPcT5qoRnefBFa/DqNYB/Ye79Uj/ACvBTGap2Ef9LH3kn4qdabbDH/Ula3gXAHwzWIteudjjyLnn8rfi6imDKRaBsg9WzWf/ANbT5hTYbMxg7LY2Aey1raeGS5/pD0jvOEMTW8XkuPgKAe9atpXWG0TVM0zru6tG/wARgmDqWldb7LDUX/tXD8LDUfyyC0zSuu1pkqGkRN/J61OLz8KLQrTpiNuXaPDLxUGXSUkhw7I4Z+Ko2WW1kkkkknMkkk+OJ71csllvntOLRtpQu+QWBsjTxWw2Cqqus6kWewxN/wBBl15FHPcb0jubjs4CgW3Arl+q0brwIXSbJW6KrEwL6IigIiICIiAiIgIiICIiAiIg13WLU2y2s3nBzJAKB7KA94IofCvFaLpP0Z2plTC+OYbj/pv5UNWn+QXXEV0efLbofSUTgPutooMyBUAcHNJCgT6Ucw0dK9pGwlwXpJQbboezy/1YIn8XMaT40qryTHmyTS8e2RxPJxWOk0yb3ZaXDccPmvRk+oGjXZ2Zg5Fw8io3+7XR1aiIj9xTR54k0jO4UaA3kMferP3SR/rFx5r0efR1YPYeP3fRVx+j+wj8Dz+76JqvPNn0Odyytm0Mdy77DqfYm5Qg8ySp8OhrOz1YYx3BNHDrBq/I71WOPIFbVorUuZ1Lzbo4rqbImjJoHIBVpyGF0NoFsIG0rMgL6iyCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/9k=',
                thumbnail: 'data:image/jpeg;base64,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',
              },  {
                original: 'https://i.pinimg.com/originals/09/68/ea/0968ea9403afd2d57dfc41f31580eff5.jpg',
                thumbnail: 'https://i.pinimg.com/originals/09/68/ea/0968ea9403afd2d57dfc41f31580eff5.jpg',
              },  {
                original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HY1ul7-0vTeTJv_Bc9xDiEt8lL_DVId5Dw&usqp=CAU',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HY1ul7-0vTeTJv_Bc9xDiEt8lL_DVId5Dw&usqp=CAU',
              }, 
          ]
        })}/></div>);
  }
}
 export default Slider