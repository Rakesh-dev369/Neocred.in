import * as React from "react"
import { cn } from "@/lib/utils"

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { defaultValue?: string; onValueChange?: (value: string) => void }
>(({ className, defaultValue, onValueChange, children, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue || "")
  
  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <div ref={ref} className={className} {...props}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { value, onValueChange: handleValueChange })
          : child
      )}
    </div>
  )
})
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
      className
    )}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string; onValueChange?: (value: string) => void; currentValue?: string }
>(({ className, value, onValueChange, currentValue, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
      currentValue === value ? "bg-white text-gray-950 shadow-sm" : "",
      className
    )}
    onClick={() => onValueChange?.(value)}
    {...props}
  />
))
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string; currentValue?: string }
>(({ className, value, currentValue, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
      currentValue === value ? "block" : "hidden",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }