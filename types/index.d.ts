export interface ContextType {
    account: AccountProps | null
    setAccount: Dispatch<setStateaction<AccountProps | null>>
}

export interface AccountProps {
    _id: string
    uid: string
    name: string
    pin: string
}

export interface ChildProps {
    children: ReactNode
}