import { CreditCard, LogOut, Settings, User } from 'lucide-react'
import UserAvatar from '@/components/user-avatar'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { currentUser, SignOutButton } from '@clerk/nextjs'

export const UserButton = async () => {
	const user = await currentUser()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="w-full justify-between gap-4 py-6">
					<figure className="flex items-center gap-4">
						<UserAvatar width={36} height={36} src={user?.imageUrl} />
						{`${user?.lastName ?? 'User'}`}
					</figure>
					<BiDotsHorizontalRounded />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-60 p-3 dark:bg-zinc-900">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem className="p-3" asChild>
						<Link href="/auth/user-profile">
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className="p-3">
						<CreditCard className="mr-2 h-4 w-4" />
						<span>Billing</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="p-3">
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<SignOutButton>
					<DropdownMenuItem className="p-3">
						<LogOut className="mr-2 h-4 w-4" />
						<span>Log out</span>
					</DropdownMenuItem>
				</SignOutButton>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
