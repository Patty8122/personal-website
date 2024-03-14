import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import Nav2 from '../components/landing_page/nav2';
import styles from '../styles/utils.module.css';
import Parent from "../components/checklistParent";
import { useSession, signIn, signOut } from 'next-auth/react';
import { connectDB, disconnectDB } from './api/checklist/checklistsModel';
import { getSession } from "next-auth/react";



const ChecklistPage = (({ checklist_names_ }) => {

    console.log("checklist_names_: ", checklist_names_);
    const [checklist_request, setChecklistRequest] = useState('');
    const [checklist_names, updateTabNames] = useState(checklist_names_);
    const session = useSession();
    const [user_email, setUserEmail] = useState(null);
    const [user_image, setUserImage] = useState(null);
    const [user_name, setUserName] = useState(null);
    const { data, status } = useSession();
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        if (checklist_names_.length > 0) {
            updateTabNames(checklist_names_);
        }
    }, [checklist_names_]);


    // setting user email to state variable
    useEffect(() => {
        console.log("session: ", session);
        if (session && session.data && session.data.user && session.data.user.email) {
            setUserEmail(session.data.user.email);
            setUserImage(session.data.user.image);
            setUserName(session.data.user.name);
            console.log("checklist_names_: ", checklist_names_);
            
        }
    }, [session.status === "authenticated"]);

    
    const addChecklist = async (checklist_request) => {
        // update the state of checklist_request
        setChecklistRequest(checklist_request);
    }

    // NEED TO FIX THIS : api call to database to edit tasklist
    const deleteTodo = async (task, id) => {
        // for the checklist that the task is in with the id = id
        // , delete the task from the tasklist
        console.log("task: ", task);
        console.log("id: ", id);

        updateTabNames(
            checklist_names.map((checklist) => {
                if (checklist.tasklist[task]) {
                    delete checklist.tasklist[task];
                }
                return checklist;
            })
        );

        await fetch('/api/checklist/deleteTask', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                task: task,
                email: user_email,
                id: id,
            }),
        });
    }

    const expandTask = async (task, id_parent, time) => {
        submitChecklistRequest(task, id_parent, time);
    }

    const fetchSubtaskList = async (id_parent) => {
        console.log("id_parent: ", id_parent);

        const data = await fetch('/api/checklist/fetchSubtasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id_parent: id_parent,
            }),

        });

        const datajson = await data.json();
        console.log("datajson.subtasks: ", datajson);
        return datajson.subtasks
    }

    // adds a new checklist to the database
    const submitChecklistRequest = async (checklist_request, id_parent, total_time) => {
        setLoading(true);
        // Check if checklist_request is empty
        if (checklist_request === '') {
            alert('Please enter a checklist request');
            return;
        }
        var request_body;
        if (id_parent === undefined) {
            request_body = JSON.stringify({
                checklist_request: checklist_request,
                email: user_email,
            })
        }
        else {
            request_body = JSON.stringify({
                checklist_request: checklist_request,
                email: user_email,
                id_parent: id_parent,
                subtask: true,
                time: total_time
            })
        }

        // Call the API to add the new checklist
        const res = await fetch('/api/checklist', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: request_body,
        });

        console.log("LINE 114 res: ", res)
        // Check if the new checklist was added successfully
        if (res.ok) {
            console.log("New checklist added to the database!");

            // Trigger the server to fetch the updated checklists again
            // await fetch('/api/checklist?refresh=true');
            try {
                const res = await fetch('/api/checklist', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        email: user_email
                    }
                })
                const data = await res.json();
                // var checklist_names = data.check_list;
                // update the props of checklist_names
                updateTabNames(data.check_list);
                setLoading(false);

            } catch (error) {
                console.log(error);
            }



        } else {
            console.error(`Failed to add new checklist: ${res.status} ${res.statusText}`);
        }
    };



    return (
        <div className="checklistPage">
            {data && data.user && console.log("data.user: ", data.user.name)}
            {data && data.user &&
            <Nav2 data={data}/>}
            {!data  && <Nav2 />}
            <div className={styles.loading} style={loading  ? { display: "block" } : { display: "none" }}></div>
            <div className="row justify-content-stretch h-100">
                <div className="col-12 span-all">
                    {session.status === "authenticated" && 
                    <>
                    <h4 className={styles.heading}>Enter a prompt to create a checklist. For example, type in "Travel abroad" </h4>
                    < input type="text" value={checklist_request} className={styles.searchBar} onChange={(e) => addChecklist(e.target.value)} />
                    </>
                    }
                    < button className="pl-0 pr-0 pt-1 pb-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-300 font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 " onClick={() => {
                        submitChecklistRequest(checklist_request);
                        setChecklistRequest('');
                        }}>Add Checklist</button>
                    <br />
                    {session.status !== "authenticated" && 
                    <h4 className={styles.heading + " ml-5 ml-sm-3 ml-md-4"}>Sign in to create and save custom checklists! </h4>}
                    

                    <div className="container-fluid m-0 p-0">
                        <div className="row p-5 justify-content-left">
                            {console.log("144", checklist_names)}
                            {session.status === "authenticated" && checklist_names &&
                                <Parent tabs={checklist_names} deleteTodo={deleteTodo} user_email={user_email} fetchSubtaskList={fetchSubtaskList} expandTask={expandTask}/>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}
);



export default ChecklistPage;



export async function getServerSideProps(context) {
    // Connect to the database before rendering the page
    await connectDB();  
    const session = await getSession(context);
    console.log("LINE 159 session: ", session);

    // Setting user email to a state variable if the user is logged in
    let user_email = null;
    if (session && session.user && session.user.email) {
        user_email = session.user.email;
    }

    console.log("LINE 164 user_email: ", user_email);

    // Fetch checklist from the database using GET request
    try {
        const { req, res } = context;

        console.log("LINE 171 req: ", req);

        // Check if the request includes a 'refresh' query parameter
        if (req.query && req.query.refresh) {
            // Handle the checklist refresh request
            await handleChecklistRefresh(user_email, res);
            console.log("LINE 175 refresh: ", req.query.refresh);
            return { props: {} }; // Return an empty object as we're using server-sent events for response
        } else {
            const res = await fetch('http://localhost:3000/api/checklist', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    email: user_email
                }
            }
            );

            // console.log("LINE 181 res: ", res)

            if (!res.ok) {
                throw new Error(`Failed to fetch checklist: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            // console.log("LINE 181 data: ", data);

            // Disconnect from the database
            disconnectDB();

            return {
                props: {
                    checklist_names_: data.check_list || [], // will be passed to the page component as props
                },
            };
        }
    } catch (error) {
        console.error('Error fetching checklist:', error);

        // Disconnect from the database
        disconnectDB();

        return {
            props: {
                checklist_names_: [], // provide a default value or handle the error condition appropriately
            },
        };
    }
}

async function handleChecklistRefresh(user_email, res) {
    try {
        // Update all the checklists on the server-side as needed
        // ...

        // Fetch the updated checklists from the database
        const updatedChecklists = await fetchUpdatedChecklists(user_email);

        // Send the updated checklists as a JSON response
        res.status(200).json({ check_list: updatedChecklists });
    } catch (error) {
        console.error('Error refreshing checklists:', error);
        res.status(500).end();
    }
}

async function fetchUpdatedChecklists(user_email) {
    await connectDB();

    try {
        // get url from window.location
        var url = window.location.href;
        // get domain from url
        var domain = url.split('/')[2];
        if (domain === undefined) {
            domain = 'divyapattisapu.vercel.app';
        }
        const res = await fetch('http://' + domain + '/api/checklist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                email: user_email,
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch updated checklists: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data.check_list || [];
    } catch (error) {
        console.error('Error fetching updated checklists:', error);
        return [];
    } finally {
        disconnectDB();
    }
}

