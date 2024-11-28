import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [longUrl, setLongUrl] = useState()
  const navigate = useNavigate()

  const handleShorten = (e) => {
    e.preventDefault()
    if(longUrl) navigate(`/auth?createNew=${longUrl}`)
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        All-in-One URL <br />
        Shortening Solution!👇
      </h2>
      <form  onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input
          type="url"
          value={longUrl}
          onChange = {(e) => setLongUrl(e.target.value)}
          placeholer="Enter your URL"
          className="h-full flex-1 py-4 px-4"
        />
        <Button className="h-full" type="submit" variant="destructive">
          Shorten!
        </Button>
      </form>
      <h1 className="uppercase my-4 text-2xl sm:text-3xl lg:text-5xl text-white text-center font-extrabold">
        Zip your link with <br />
        LINKZIP
      </h1>
      <img
        src="/banner.png"
        className="w-full h-[350px] object-contain my-11 md:px-11"
        alt=""
      />
      <Accordion type="multiple" className="w-full md:px-11" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the LinkZip URL shortener works?
          </AccordionTrigger>
          <AccordionContent>
            LinkZip URL shortener converts a long URL into a short, unique link
            that redirects to the original URL.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do i need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Home
