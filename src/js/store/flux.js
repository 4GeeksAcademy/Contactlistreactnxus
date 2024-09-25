const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contactList: [

			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Agendanxus", {
					method: "GET"

				})
				const data = await response.json();
				setStore({ contactList: data.contacts })

			},

			deleteContact: async (id) => {
				await fetch("https://playground.4geeks.com/contact/agendas/Agendanxus/contacts/" + id,
					{
						method: "DELETE",
						headers: { "Content-Type": "application/json" }

					})
				getActions().loadContacts()
			},



			postContacts: async (info) => {
				try {
					await fetch("https://playground.4geeks.com/contact/agendas/Agendanxus/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(info)

					})

					getActions().loadContacts()

					return true
				} catch (error) {
					console.log(error);
					return false
				}
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
