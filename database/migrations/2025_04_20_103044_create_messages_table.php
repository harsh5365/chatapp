<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chat_thread_id')->constrained('chat_threads')->onDelete('cascade'); // Link to chat thread
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // User who sent the message
            $table->text('content'); // Message content
            $table->string('file_path')->nullable(); // File attachment
            $table->string('link')->nullable(); // Link attachment
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
