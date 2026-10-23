import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext({ value: "", setValue: () => {} })

const Accordion = ({ type = "single", collapsible = true, className, children, ...props }) => {
  const [value, setValue] = React.useState("")
  return (
    <AccordionContext.Provider value={{ value, setValue, collapsible }}>
      <div className={className} data-type={type} {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = React.forwardRef(({ className, value, children, ...props }, ref) => (
  <div ref={ref} className={cn("border-b border-white/10", className)} data-value={value} {...props}>
    {React.Children.map(children, (child) =>
      React.isValidElement(child) ? React.cloneElement(child, { itemValue: value }) : child
    )}
  </div>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, itemValue, ...props }, ref) => {
  const { value, setValue, collapsible } = React.useContext(AccordionContext)
  const open = value === itemValue
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex w-full flex-1 items-center justify-between py-4 text-sm font-medium text-left transition-all",
        className
      )}
      onClick={() => setValue(open && collapsible ? "" : itemValue)}
      {...props}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200", open && "rotate-180")} />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = ({ className, children, itemValue, ...props }) => {
  const { value } = React.useContext(AccordionContext)
  if (value !== itemValue) return null
  return (
    <div className={cn("pb-4 pt-0 text-sm", className)} {...props}>
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
