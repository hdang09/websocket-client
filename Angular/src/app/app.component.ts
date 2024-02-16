import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

//* REMEMBER to add "var global = window;" in index.html
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  stompClient!: CompatClient;
  lastMessage: string = 'No message received yet';

  constructor() {}

  ngOnInit(): void {
    const ws = new SockJS('http://localhost:8080/ws-bingo');
    this.stompClient = Stomp.over(() => ws);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/rooms', (message) => {
        // JSON.parse(message.body) if needed
        const data: string = message.body;

        this.lastMessage = data;
      });
    });
  }

  ngOnDestroy(): void {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }
}
