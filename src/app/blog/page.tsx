import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { client } from "@/sanity/lib/client";
import Scrollbutton from "@/components/scrollbutton";

export default async function BlogLanding() {
  
    interface CardData {
      cardsectionheading: string;
      cardsection: {
        cardImage: string;
        date: string;
        time: string;
        id: number;
        heading: string;
        subHeading: string;
        description: object;
      }[];
    }
     
    const cardData : CardData = await client.fetch( `*[_type == 'landingPage'][0].sections[1]{'cardsectionheading': cardsectionheading,'cardsection': cardsection[]{'cardImage': cardImage.asset->url,'date': date,'id': id,'time': time,'heading': heading,'subHeading': subHeading,'description': description,}}`)
    
     const featuredCard : CardData = await client.fetch(`*[_type == 'landingPage'][0].sections[2]{'cardsectionheading': cardsectionheading,'cardsection': cardsection[]{'cardImage': cardImage.asset->url,'date': date,'id': id,'time': time,'heading': heading,'subHeading': subHeading,'description': description,}}`)
  

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }
   

  // const reactArticles = [
  //   {
  //     title: "Agentic AI With Python For Beginners",
  //     image: "/card1.png?height=200&width=300",
  //     href: "/blog/dynamic",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Dec 10, 2024",
  //     readTime: "3 Min Read",
  //   },
  //   {
  //     title: "Next JS For Beginners",
  //     image: "/card2.png?height=200&width=300",
  //     href: "/blog/dynamic",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Sep 10, 2024",
  //     readTime: "3 Min Read",
  //   },
  //   {
  //     title: "Frontend Development",
  //     image: "/card3.png?height=200&width=300",
  //     href: "/blog/dynamic",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Dec 15, 2023",
  //     readTime: "3 Min Read",
  //   },
  //   {
  //     title: "Backend Development",
  //     image: "/card4.png?height=200&width=300",
  //     href: "/blog/dynamic",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Jan 15, 2023",
  //     readTime: "3 Min Read",
  //   },
  // ];

  // const jsArticles = [
  //   {
  //     title: "Fundamental Of Typescript",
  //     image: "/card5.png?height=200&width=300",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Feb 10, 2023",
  //     readTime: "3 Min Read",
  //   },
  //   {
  //     title: "Array In Typescript - Learn Ts #3",
  //     image: "/card6.png?height=200&width=300",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Nov 10, 2023",
  //     readTime: "3 Min Read",
  //   },
  //   {
  //     title: "7 Project With Typescript You Must Try For Your Portfolio",
  //     image: "/card7.png?height=200&width=300",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "May 10, 2023",
  //     readTime: "3 Min Read",
  //   },
  //   {
  //     title: "Make Simple Calculator With Typescript",
  //     image: "/card8.png?height=200&width=300",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Apr 10, 2023",
  //     readTime: "3 Min Read",
  //   },
  // ];
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Navigation and Hero sections remain unchanged */}

      {/* JavaScript Articles */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#2D2D2D] flex items-center">
            More Blogs
            <span className="block w-8 h-[2px] bg-purple-600 ml-2"></span>
          </h2>
          <Link href="/" className="text-purple-600 hover:text-purple-700">
            See All Article →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(featuredCard.cardsection).map((article: { cardImage: string; date: string; time: string; id: number; heading: string; subHeading: string; description: object}, index: number) => (
            <Link href={`/blog/dynamic?cardImage=${article.cardImage}&id=${article.id}&heading=${article.heading}&subHeading=${article.subHeading}&description=${JSON.stringify(article.description)}&date=${article.date}&time=${article.time}`} key={index}> 
            <Card
              key={index}
              className="group hover:border-purple-600 transition-colors hover:scale-110"
            >
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={featuredCard.cardsection[index].cardImage}
                    alt={"image"}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-[#2D2D2D] mb-4 group-hover:text-purple-600">
                    {featuredCard.cardsection[index].heading}
                  </h3>
                  <div className="flex justify-between items-center space-x-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={"NI"} />
                      <AvatarFallback>NI</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-center space-x-2 text-sm text-gray-500">
                      <span>{featuredCard.cardsection[index].subHeading}</span>
                      {/* <span>•</span> */}
                      <time dateTime={article.date}>{featuredCard.cardsection[index].date}</time>
                      {/* <span>•</span> */}
                      <span>{featuredCard.cardsection[index].time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </section>

       {/* React Articles */}
       <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#2D2D2D] flex items-center">
            More Article
            <span className="block w-8 h-[2px] bg-purple-600 ml-2"></span>
          </h2>
          <Link
            href="/blog"
            className="text-purple-600 hover:text-purple-700"
          >
            See All Article →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(cardData.cardsection).map((article: { cardImage: string; date: string; time: string; id: number; heading: string; subHeading: string; description: object}, index: number) => (
            <Link href={`/blog/dynamic?cardImage=${article.cardImage}&id=${article.id}&heading=${article.heading}&subHeading=${article.subHeading}&description=${JSON.stringify(article.description)}&date=${article.date}&time=${article.time}`} key={index}> 
            <Card
              key={index}
              className="group hover:border-purple-600 transition-colors hover:scale-110"
            >
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={cardData.cardsection[index].cardImage}
                    alt={"image"}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-[#2D2D2D] mb-4 group-hover:text-purple-600">
                    {cardData.cardsection[index].heading}
                  </h3>
                  <div className="flex items-center justify-between space-x-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={"NI"} />
                      <AvatarFallback>NI</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-center space-x-2 text-sm text-gray-500">
                      <span>{cardData.cardsection[index].subHeading}</span>
                      {/* <span>•</span> */}
                      <time dateTime={article.date}>{cardData.cardsection[index].date}</time>
                      {/* <span>•</span> */}
                      <span>{cardData.cardsection[index].time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* More Articles Button */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link href="/" ><Button
          variant="outline"
          className="text-purple-600 border-purple-600 hover:bg-purple-50"
        >
          Back To Home
        </Button>
        </Link>
      </div>

      {/* Newsletter Section */}
      <section className="bg-[#F8F9FC] py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="mb-8">
            <Image
              src="/letter-box.jpeg?height=200&width=200"
              alt="Newsletter"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
          Contact Us For The Lastest Updates
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to my newsletter and never miss my upcoming articles
          </p>
          <div className="flex gap-2 justify-center">
            <Input
              type="email"
              placeholder="Enter your email here"
              className="max-w-xs bg-white"
            />
           <Link href={"/contact"}>
            <Button className="bg-purple-600 hover:bg-purple-700">
            Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
     <Scrollbutton />
    </div>
  );
}
