<?php

namespace App\Http\Controllers;

use App\Models\ChatThread;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Chat'); // Render the Chat page
    }

    /**
     * Fetch threads created by the logged-in user.
     */
    public function getThreads()
    {
        $threads = ChatThread::where('created_by', Auth::id())->get();
        return response()->json($threads);
    }

    /**
     * Fetch messages with user details for a specific thread.
     */
    public function getMessages(ChatThread $thread)
    {
        $messages = $thread->messages()->with('user')->get();
        return response()->json($messages);
    }

    /**
     * Send a message in a specific thread.
     */
    public function sendMessage(Request $request, ChatThread $thread)
    {
        $request->validate([
            'content' => 'required_without_all:file_path,link|string',
            'file_path' => 'nullable|string',
            'link' => 'nullable|url',
        ]);

        $message = new Message();
        $message->chat_thread_id = $thread->id;
        $message->user_id = Auth::id();
        $message->content = $request->content;
        $message->file_path = $request->file_path;
        $message->link = $request->link;
        $message->save();

        return response()->json(['message' => 'Message sent successfully']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ChatThread $chatThread)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ChatThread $chatThread)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ChatThread $chatThread)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ChatThread $chatThread)
    {
        //
    }
}
