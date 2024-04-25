/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R5vUQNerJpc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="rounded-t-lg">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="grid">
              <div className="font-bold">Acme Inc. Support</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Online</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid bg-gray-100 p-4 rounded-b-lg dark:bg-gray-800">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <div className="grid items-end">
                <div className="rounded-lg p-4 bg-white shadow-md">Hi there! How can I help you today?</div>
                <div className="w-2 h-2 rounded-full bg-gray-100 dark:bg-gray-800 translate-x-2 -translate-y-1" />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</div>
            </div>
            <div className="flex items-end space-x-2 justify-end">
              <div className="text-xs text-gray-500 dark:text-gray-400">1 minute ago</div>
              <div className="grid items-end">
                <div className="rounded-lg p-4 bg-gray-900 text-white shadow-md">I'm having trouble with my order.</div>
                <div className="w-2 h-2 rounded-full bg-gray-900 translate-x-2 -translate-y-1" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="rounded-b-lg">
        <form className="flex w-full items-center space-x-2 p-4">
          <Input className="flex-1" placeholder="Type a message" />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}