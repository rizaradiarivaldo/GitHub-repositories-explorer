import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MdOutlineStarPurple500 } from "react-icons/md"
import { BiFork } from "react-icons/bi"
import { useLazyGetListUsersQuery } from "@/store/users/usersApi"
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Skeleton } from "../components/ui/skeleton"

export default function SearchRepo() {
  const [getData, { data: users, isSuccess, isFetching }] = useLazyGetListUsersQuery()

  const [searchUsername, setSearchUsername] = useState<string>("")
  const [lastSearchedUsername, setLastSearchedUsername] = useState("")
  const [isShowingResult, setIsShowingResult] = useState(false)

  const showingUsers: boolean = isSuccess && isShowingResult && users?.length !== 0 && !isFetching

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getData(searchUsername)
    setLastSearchedUsername(searchUsername)
    setIsShowingResult(true)
  }
  return (
    <div className="w-full p-3 lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-lg flex flex-col space-y-3">
        <p className="font-bold text-md lg:text-xl">Search by Username to See Your Repos</p>
        <form onSubmit={onHandleSubmit}>
          <div className="lg:flex space-x-2 space-y-3 lg:space-y-2">
            <Input type="text" name="username" placeholder="Enter Username" className="w-full" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchUsername(event.target.value)} />
            <Button className="w-full lg:w-auto">Search</Button>
          </div>
          {showingUsers && <p className="text-neutral-600 text-sm mt-2 lg:mt-0">Showing users for "{lastSearchedUsername}"</p>}
        </form>
        {users?.length === 0 && <p className="text-neutral-800 text-sm">No users found with that username.</p>}
        <Accordion type="multiple" className="w-full">
          {isFetching ? (
            <div className="flex flex-col space-y-3">
              <div className="space-y-2">
                <Skeleton className="w-full h-20 bg-neutral-200 rounded-sm" />
                <Skeleton className="w-full h-10 bg-neutral-200 rounded-sm" />
              </div>
              <div className="space-y-2">
                <Skeleton className="w-full h-20 bg-neutral-200 rounded-sm" />
                <Skeleton className="w-full h-10 bg-neutral-200 rounded-sm" />
              </div>
            </div>
          ) : (
            users?.map((user) => (
              <AccordionItem value={`${user.id}`} key={user.id}>
                <AccordionTrigger className="font-bold text-lg">{user.login} </AccordionTrigger>
                {user.repos.map((repo) => (
                  <AccordionContent className="flex flex-col gap-4 text-balance" key={repo.id}>
                    <div className="p-2 border border-neutral-200 rounded-sm">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">{repo.name}</p>
                        <div className="flex items-center space-x-1">
                          <div className="flex items-center space-x-1">
                            <MdOutlineStarPurple500 /> <p>{repo.stargazers_count}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BiFork /> <p>{repo.forks_count}</p>
                          </div>
                        </div>
                      </div>
                      <p>{repo.description ? repo.description : "No Description"}</p>
                      <div className="w-max mt-2 italic hover:underline cursor-pointer text-blue-800" onClick={() => window.open(repo.html_url, "_blank")}>
                        Open GitHub Page
                      </div>
                    </div>
                  </AccordionContent>
                ))}
              </AccordionItem>
            ))
          )}
        </Accordion>
      </div>
    </div>
  )
}
