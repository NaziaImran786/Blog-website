// "use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlogLandings from "@/components/landing-two";
import { client } from "@/sanity/lib/client";


export default async function BlogLanding() {
  interface CardData {
    cardsectionheading: string;
    cardsection: {
      cardImage: string;
      date: string;
      id: number;
      time: string;
      heading: string;
      subHeading: string;
      description: object;
    }[];
  }

  const res = await client.fetch(
    "*[_type == 'landingPage'][0]{'heading': sections[0].heading,'description': sections[0].description,'heroImage': sections[0].heroImage.asset->url,}"
  );
  const { heading, description, heroImage } = await res;

  const cardData: CardData = await client.fetch(
    `*[_type == 'landingPage'][0].sections[1]{'cardsectionheading': cardsectionheading,'cardsection': cardsection[]{'cardImage': cardImage.asset->url,'date': date, 'id': id, 'time': time,'heading': heading,'subHeading': subHeading,'description': description,}}`
  );

  const featuredCard: CardData = await client.fetch(
    `*[_type == 'landingPage'][0].sections[2]{'cardsectionheading': cardsectionheading,'cardsection': cardsection[]{'cardImage': cardImage.asset->url,'date': date,'id': id,'time': time,'heading': heading,'subHeading': subHeading,'description': description,}}`
  );

  const blog: CardData = await client.fetch(
    `*[_type == 'landingPage'][0].sections[4]{'cardsectionheading': cardsectionheading,'cardsection': cardsection[]{'cardImage': cardImage.asset->url,'date': date,'time': time,'id': id, 'heading': heading,'subHeading': subHeading,'description': description, }}`
  );

  // const categories = [
  //   {
  //     name: "HTML",
  //     icon: "/category/html.png?height=48&width=48",
  //     href: "https://ivypanda.com/essays/hyper-text-markup-language-html/",
  //     bgColor: "bg-orange-100",
  //   },
  //   {
  //     name: "CSS",
  //     icon: "/category/css.png?height=24&width=24",
  //     href: "/blog/css.png",
  //     bgColor: "bg-purple-100",
  //   },
  //   {
  //     name: "Typescript",
  //     icon: "/category/typescript.png?height=24&width=24",
  //     href: "/blog/typescript.png",
  //     bgColor: "bg-blue-100",
  //   },
  //   {
  //     name: "Node JS",
  //     icon: "/category/node.png?height=24&width=24",
  //     href: "/blog/node.png",
  //     bgColor: "bg-green-100",
  //   },
  //   {
  //     name: "Next JS",
  //     icon: "/category/next.png?height=24&width=24",
  //     href: "/blog/next.png",
  //     bgColor: "bg-black",
  //   },
  // ];

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

  // const articles = [
  //   {
  //     title: "Fundamental Of HTML",
  //     image: "/card9.jpeg?height=200&width=300",
  //     href: "/blog/dynamic",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Aug 20, 2023",
  //     readTime: "3 min Read",
  //   },
  //   {
  //     title: "Grid CSS Make Your Life Easier",
  //     image: "/card10.png?height=200&width=300",
  //     href: "/blog/dynamic",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Nov 10, 2023",
  //     readTime: "3 Min Read",
  //   },
  //   {
  //     title: "Make Animated Light Mode And Dark Mode Toggle With CSS",
  //     image: "/card11.png?height=200&width=300",
  //     href: "/blog/dynamic",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Sep 09, 2024",
  //     readTime: "3 Min Read",
  //   },
  //   {
  //     title: "Make Development Environment Easier With NextJS",
  //     image: "/card12.png?height=200&width=300",
  //     href: "/blog/dynamic",
  //     author: {
  //       name: "Nazia Imran",
  //       avatar: "NI?height=32&width=32",
  //     },
  //     date: "Dec 19, 2024",
  //     readTime: "3 Min Read",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
              {heading}
              <span className="block">Frontend Developer</span>
            </h1>
            <p className="text-gray-600 max-w-md">{description}</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email here"
                className="max-w-xs bg-white"
              />
              <Link href={"/contact"}>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Contact us
              </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={heroImage}
              alt="Developer Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#2D2D2D]">
            Browse Our Latest Blogs
          </h2>
          <Link href="/blog" className="text-purple-600 hover:text-purple-700">
            See All Blog →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {blog.cardsection.map((article: { cardImage: string; date: string; time: string; id: number; heading: string; subHeading: string; description: object}, index: number) => (
            <Link
              href={`/blog/dynamic?cardImage=${article.cardImage}&id=${article.id}&heading=${article.heading}&subHeading=${article.subHeading}&description=${JSON.stringify(article.description)}&date=${article.date}&time=${article.time}`}
              key={index}
            >
              <Card
                key={index}
                className="group flex flex-col bg-[#d8dded] justify-center items-center h-[200px] lg:h-[160px] hover:border-purple-600 transition-colors hover:scale-110"
              >
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-purple-500">
                    <Image
                      src={blog.cardsection[index].cardImage}
                      alt={"image"}
                      width={66}
                      height={66}
                    />
                  </div>
                  <span className="font-medium text-center text-[#2D2D2D] group-hover:text-purple-600">
                    {blog.cardsection[index].heading}
                  </span>
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
          <Link href="/blog" className="text-purple-600 hover:text-purple-700">
            See All Article →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.cardsection.map((article: { cardImage: string; date: string; time: string; id: number; heading: string; subHeading: string; description: object}, index: number) => (
            <Link
              href={`/blog/dynamic?cardImage=${article.cardImage}&id=${article.id}&heading=${article.heading}&subHeading=${article.subHeading}&description=${JSON.stringify(article.description)}&date=${article.date}&time=${article.time}`}
              key={index}
            >
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
                        <time dateTime={article.date}>
                          {cardData.cardsection[index].date}
                        </time>
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

      {/* Featured Articles */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#2D2D2D]">
            Featured Article
          </h2>
          <Link href="/blog" className="text-purple-600 hover:text-purple-700">
            See All Article →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCard.cardsection.map((article: { cardImage: string; date: string; time: string; id: number; heading: string; subHeading: string; description: object}, index: number) => (
            <Link
              href={`/blog/dynamic?cardImage=${article.cardImage}&id=${article.id}&heading=${article.heading}&subHeading=${article.subHeading}&description=${JSON.stringify(article.description)}&date=${article.date}&time=${article.time}`}
              key={index}
            >
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
                    <div className="flex items-center justify-between space-x-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={"NI"} />
                        <AvatarFallback>NI</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center space-x-2 text-sm text-gray-500">
                        <span>
                          {featuredCard.cardsection[index].subHeading}
                        </span>
                        {/* <span>•</span> */}
                        <time dateTime={article.date}>
                          {featuredCard.cardsection[index].date}
                        </time>
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

        <BlogLandings />
      </section>
    </div>
  );
}
